const Testimonials = () => {
  return (
    <section className="my-12 sm:my-16 py-8 sm:py-12 border-t border-b border-border">
      <div className="max-w-[805px] mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12">O que os homens estão dizendo:</h3>
        
        <img 
          src="https://i.imgur.com/KXnhx7N.png" 
          alt="Feedbacks reais de clientes satisfeitos" 
          className="w-full rounded-xl"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Testimonials;
