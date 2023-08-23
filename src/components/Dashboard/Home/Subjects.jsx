export default function Subjects(params) {
  const { subjectId, day, time, teacher } = params;

  const subjects = {
    biology: (
      <section className="bg-biology rounded-lg bg-cover p-3 text-sm font-normal lg:text-base">
        <h2 className="mb-3 text-base font-medium lg:text-xl">Biologi</h2>
        <p className="my-1">
          {day} pukul {time}
        </p>
        <p>{teacher}</p>
      </section>
    ),
    chemistry: (
      <section className="bg-chemistry rounded-lg bg-cover p-3 text-sm font-normal lg:text-base">
        <h2 className="mb-3 text-base font-medium lg:text-xl">Kimia</h2>
        <p className="my-1">
          {day} pukul {time}
        </p>
        <p>{teacher}</p>
      </section>
    ),
    physics: (
      <section className="bg-physics rounded-lg bg-cover p-3 text-sm font-normal lg:text-base">
        <h2 className="mb-3 text-base font-medium lg:text-xl">Fisika</h2>
        <p className="my-1">
          {day} pukul {time}
        </p>
        <p>{teacher}</p>
      </section>
    ),
    math: (
      <section className="bg-math rounded-lg bg-cover p-3 text-sm font-normal lg:text-base">
        <h2 className="mb-3 text-base font-medium lg:text-xl">Matematika</h2>
        <p className="my-1">
          {day} pukul {time}
        </p>
        <p>{teacher}</p>
      </section>
    ),
  };

  return subjects[subjectId];
}
