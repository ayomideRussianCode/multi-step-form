function FormContainer({ children }) {
  return (
    <div className=" bg-PurplishBlue w-full min-h-screen font-ubuntu">
      <div className="flex justify-center items-center">
        <div className=" w-96 h-96 flex justify-center items-center bg-white m-10 rounded-lg shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}
export default FormContainer;
