const CourseCard = ({
  title,
  duration,
  coverImageUrl,
  numOfReviews,
  courseLevel,
  description,
}) => {
  return (
    <div className="bg-slate-500 p-4 rounded-xl mt-12">
      <div>
        <img
          src={coverImageUrl}
          alt={title}
          className="rounded-lg -translate-y-14 mb-0"
        />
      </div>
      <div className="flex items-center justify-between px-3 text-white -mt-8 mb-3">
        <h4 className="md:text-xs lg:text-sm">{title}</h4>
        <p className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
          {courseLevel}
        </p>
      </div>
      <div>
        <p className="line-clamp-2 w-full px-3 text-sm my-8 text-justify">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between my-3 pt-4 border-t-[1px] border-slate-400/20">
        <p className="text-sm text-white">{` شرکت کنندگان: ${numOfReviews} نفر`}</p>
        <p className="text-xs text-white bg-violet-500 px-3 py-1 rounded-full">{`مدت زمان: ${duration} دقیقه`}</p>
      </div>
    </div>
  );
};
export default CourseCard;
