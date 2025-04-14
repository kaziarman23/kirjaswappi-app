import toast from "react-hot-toast";


function Footer() {
  const notify = () =>
    toast("It's a demo button.", {
      style: {
        background: "#fff3cd",
        color: "#856404",
        border: "1px solid #ffeeba",
      },
    });

  return (
    <>
      <hr className="w-full bg-gray-600" />
      <div className="w-11/12 flex items-center justify-between p-2 mx-auto">
        <div  className="flex flex-col">
          <p className="">offered by</p>
          <h1 className="text-xs">Raisa Hossain</h1>
        </div>
        <button
          type="button"
          onClick={notify}
          className="px-4 py-1 bg-blue-700 text-white rounded-md cursor-pointer"
        >
          Request Swap
        </button>
      </div>
    </>
  );
}

export default Footer;
