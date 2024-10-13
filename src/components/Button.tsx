const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void; }) => {
     return (
       <button
         onClick={onClick}
         className="bg-pink-600 text-white p-2 rounded hover:bg-pink-800 transition"
       >
         {children}
       </button>
     );
   };
   
   export default Button;
   