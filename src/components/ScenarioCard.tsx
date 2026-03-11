interface ScenarioCardProps {
  number: string;
  title: string;
  description: string;
}

const ScenarioCard = ({ number, title, description }: ScenarioCardProps) => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-card-subtle transition-shadow duration-300 hover:shadow-card-hover flex gap-4 items-start">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-foreground font-bold flex items-center justify-center text-sm">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-foreground mb-1">{title}</h4>
        <p className="text-base text-muted-foreground leading-relaxed m-0">{description}</p>
      </div>
    </div>
  );
};

export default ScenarioCard;
