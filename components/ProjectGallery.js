export default function ProjectGallery({ items }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <div className="text-sm text-slate-500">{item.category}</div>
            <div className="mt-2 text-lg font-semibold text-slate-900">{item.title}</div>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
