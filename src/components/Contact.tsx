const Contact = () => {
     return (
       <section id="contact" className="p-10 bg-gray-300">
         <h2 className="text-3xl text-center">Contact Me</h2>
         <form className="mt-5 max-w-lg mx-auto">
           <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border border-gray-400 rounded" />
           <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border border-gray-400 rounded" />
           <textarea placeholder="Your Message" className="w-full p-2 mb-4 border border-gray-400 rounded"></textarea>
           <button type="submit" className="bg-pink-600 text-white p-2 rounded hover:bg-pink-800 transition">Send Message</button>
         </form>
       </section>
     );
   };
   
   export default Contact;
   