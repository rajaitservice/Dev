
import { Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const TeamMember = ({ name, role, image, linkedin, email }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <div className="flex space-x-3">
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {email && (
              <a 
                href={`mailto:${email}`}
                className="bg-white p-2 rounded-full text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-brand-teal">{role}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Splunk Solutions Architect',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      linkedin: '#',
      email: 'sarah@example.com'
    },
    {
      name: 'David Chen',
      role: 'Lead Data Engineer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      linkedin: '#',
      email: 'david@example.com'
    },
    {
      name: 'Aisha Patel',
      role: 'Big Data Specialist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
      linkedin: '#',
      email: 'aisha@example.com'
    },
    {
      name: 'Michael Torres',
      role: 'Cloud Infrastructure Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      linkedin: '#',
      email: 'michael@example.com'
    },
  ];

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of certified professionals brings deep expertise in Splunk and Data Engineering to deliver exceptional results for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              email={member.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
