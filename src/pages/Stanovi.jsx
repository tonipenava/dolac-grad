import ApartmentAccordion from '../components/ApartmentAccordion';

const Stanovi = () => {
  const apartments = [
    {
      id: 1,
      name: 'Apartment 1',
      rooms: { bedroom: 100, kitchen: 50, livingRoom: 80 },
    },
    {
      id: 2,
      name: 'Apartment 2',
      rooms: { bedroom: 120, kitchen: 60, livingRoom: 90 },
    },
    // Add more apartments as needed
  ];

  return (
    <div>
      <h1>Stanovi</h1>
      <div>
        {apartments.map((apartment) => (
          <ApartmentAccordion key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
};

export default Stanovi;
