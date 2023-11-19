// Your JavaScript code here

// React component for services
const Services = () => {
  const servicesData = [
    { title: 'Service 1', description: 'Description of service 1.' },
    { title: 'Service 2', description: 'Description of service 2.' },
    { title: 'Service 3', description: 'Description of service 3.' },
  ];

  return (
    <div class="container">
      {servicesData.map((service, index) => (
        <div key={index} class="col-md-4">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

// Render the Services component using React
const servicesContainer = document.getElementById('services');
ReactDOM.render(<Services />, servicesContainer);