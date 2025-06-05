export default function Section({ title, children }) {
  return (
    <section className="w-full px-4 py-10 md:py-16 lg:py-20">
      {title && (
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          {title}
        </h2>
      )}
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}