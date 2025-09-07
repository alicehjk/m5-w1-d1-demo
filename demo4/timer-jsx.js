class Timer extends React.Component {
  constructor(props){ super(props); this.state = { seconds: 0 }; }
  componentDidMount(){ this.interval = setInterval(() => this.setState(s => ({ seconds: s.seconds + 1 })), 1000); }
  componentWillUnmount(){ clearInterval(this.interval); }
  render(){ return (<div>Seconds:{this.state.seconds}</div>); }
}
ReactDOM.render(<Timer />, document.getElementById('root'));
