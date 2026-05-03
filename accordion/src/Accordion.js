import Question from "./Question";
const items = [
  {
    id: 1,
    question: "Where are these chairs assembled ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam esse tempore quam officiis commodi? Doloribus repellendus deserunt nemo harum.",
  },
  {
    id: 2,
    question: "How long do I have to return my chair ?",
    answer:
      "You have 30 days to return your chair as long as it is in perfect condition.",
  },
  {
    id: 3,
    question: "Do you ship to countries outside the EU ?",
    answer: "Yes, we ship worldwide. Shipping costs depend on your location.",
  },
];
function Accordion() {
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <Question obj={item} index={i} key={item.id} />
      ))}
    </div>
  );
}

export default Accordion;
