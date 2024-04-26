const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div class="bg-zinc-200">
      <div class="container px-5 py-4 mx-auto">
        <p class="text-sm text-zinc-900 capitalize text-center ">
          Dolac grad © {year} All rights reserved{' '}
        </p>
      </div>
    </div>
  );
};

export default Copyright;
