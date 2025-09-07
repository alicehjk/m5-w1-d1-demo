function formatName(user){ return user.firstName + ' ' + user.lastName; }
const user = { firstName: 'West', lastName: 'Cliff' };
ReactDOM.render(<h1>Hello, {formatName(user)}</h1>, document.getElementById('root'));
