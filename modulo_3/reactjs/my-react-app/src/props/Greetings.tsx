
export default function Greeting(props: {name:string, apellido:string}) {
  return <h2>Hola, {props.name} {props.apellido}</h2>;
}
