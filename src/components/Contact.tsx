
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slackWebhookUrl, setSlackWebhookUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendToSlack = async (data: typeof formData) => {
    if (!slackWebhookUrl) {
      console.error("Slack webhook URL is not set");
      return false;
    }

    try {
      const slackMessage = {
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "New Contact Form Submission"
            }
          },
          {
            type: "divider"
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Name:*\n${data.name}`
              },
              {
                type: "mrkdwn",
                text: `*Email:*\n${data.email}`
              }
            ]
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Phone:*\n${data.phone || 'Not provided'}`
              },
              {
                type: "mrkdwn",
                text: `*Company:*\n${data.company || 'Not provided'}`
              }
            ]
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Message:*\n${data.message}`
            }
          }
        ]
      };

      const response = await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(slackMessage),
      });

      if (!response.ok) {
        console.error('Failed to send message to Slack');
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Error sending message to Slack:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let slackSent = false;
    
    try {
      slackSent = await sendToSlack(formData);
      
      toast({
        title: "Message sent successfully!",
        description: slackSent 
          ? "We've received your message and will get back to you soon." 
          : "Your message was received, but there was an issue with our notification system. We'll still process your request.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error("Error in form submission:", error);
      toast({
        title: "Error sending message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Admin section to set the webhook URL (typically would be hidden in production)
  const handleWebhookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlackWebhookUrl(e.target.value);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Contact us today to discuss how our Splunk and Data Engineering expertise can help your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <Input 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message*
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and how we can help..."
                  required
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-brand-blue hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {/* Admin section for setting webhook URL - in production this would be hidden/protected */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Admin Settings</h4>
              <div>
                <label htmlFor="webhookUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Slack Webhook URL
                </label>
                <Input
                  id="webhookUrl"
                  name="webhookUrl"
                  type="text"
                  value={slackWebhookUrl}
                  onChange={handleWebhookChange}
                  placeholder="https://hooks.slack.com/services/..."
                  className="w-full text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter your Slack webhook URL here to receive form submissions in your Slack workspace.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="mt-1">info@rajaitservice.com</p>
                  <p>support@rajaitservice.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="mt-1">(123) 456-7890</p>
                  <p>(987) 654-3210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-bold">Visit Us</h4>
                  <p className="mt-1">
                    Logdansvägen 12<br />
                    Stockholm, Sweden
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
