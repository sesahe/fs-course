const Header = (props) => <h1>{props.course}</h1>; 
const Part = (props) => {
  return (
    <p>{props.partName}: {props.exercises}</p>
  );
};
const Content = (props) => {
  return (
  <div>
    <Part partName={props.part1} exercises={props.exercises1} />
    <Part partName={props.part2} exercises={props.exercises2} />
    <Part partName={props.part3} exercises={props.exercises3} />
  </div>
  );
};
const Total = (props) => <p>Number of exercises {props.totalExercises}</p>;

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part2} exercises={exercises3}/>
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};
console.log(Content);

export default App