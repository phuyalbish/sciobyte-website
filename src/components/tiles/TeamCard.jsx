const TeamCard = ({ name, title, imgUrl }) => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col gap-[0.5rem] items-center justify-center">
        <div className="relative rounded-xl overflow-hidden">
          <div className="bg-white shadow-lg overflow-hidden aspect-square">
            <img
              decoding="async"
              loading="lazy"
              // src="https://imgs.search.brave.com/CWuaDKK7uaoe5a8vK9CBQEmxtsmI-Fw3xiRbUHjT1uE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtY2RuLjEyM3Jm/LmNvbS9pbmRleC9z/dGF0aWMvYXNzZXRz/L2FsbC1pbi1vbmUt/cGxhbi9waG90b3Nf/djIuanBn"
              src={imgUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="text-left w-full">
          <h2 className="text-lg  font-bold text-gray-900">{name}</h2>
          <p className="text-gray-600 font-medium">{title}</p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
