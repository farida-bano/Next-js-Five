const Projects = () => {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl text-center">Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Project 1 */}
        <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <img 
            src="/images/calculator.png" 
            alt="Calculator Project" 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl">Project 1</h3>
          <p>
            Calculator Project: This simple calculator, built using TypeScript, performs basic operations 
            like addition, subtraction, multiplication, and division. It has a clean, responsive design 
            for both desktop and mobile devices. To run it, use: <code>npx fb1-calculator</code>.
          </p>
        </div>
        
        {/* Project 2 */}
        <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <img 
            src="/images/number.png" 
            alt="Number Guessing Game" 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl">Project 2</h3>
          <p>
            CLI Number Guessing Game: This command-line game is built using TypeScript. Players must guess 
            a random number within a specified range. To run it, use: <code>npx fb1-number-guessing</code>.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <img 
            src="/images/atm.png" 
            alt="ATM Machine Project" 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl">Project 3</h3>
          <p>
            ATM Machine Project: This project simulates an ATM machine using TypeScript. To run it, use: 
            <code>npx farida-atm-machine</code>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
