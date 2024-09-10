export default async function Hero() {
        return (
      <section className="container my-12">
        <h1 className="text-4xl font-bold text-center">
          Find your next <br/> 'DREAM JOB'
        </h1>
        {/*<p className="text-center text-gray-600 mt-2">*/}
        {/*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, obcaecati quas! Aliquam at, dignissimos eius esse ex excepturi ipsa.*/}
        {/*</p>*/}
        <form className="flex gap-2 mt-4 max-w-md mx-auto">
          <input
            type="search"
            className="border border-red-700 w-full py-2 px-3 rounded-md"
            placeholder="Search for jobs here ..." />
          <button className="bg-red-700 text-white py-2 px-4 rounded-md">
            Search
          </button>
        </form>
      </section>
    );
  }