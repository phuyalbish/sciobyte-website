function TrekScheduleExtraHeadingTile({ name, description }) {
  return (
    <div className="flex  flex-col">
      <div className="flex flex-row items-center gap-2">
        <div className="text-lg font-semibold">{name}</div>
      </div>

      <div className="text-base font-normal">{description}</div>
    </div>
  );
}

export default TrekScheduleExtraHeadingTile;
