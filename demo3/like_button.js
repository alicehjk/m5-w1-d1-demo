class LikeButton extends React.Component {
  constructor(props){ super(props); this.state = { liked: false }; }
  render(){ return this.state.liked ? 'You liked this.' : React.createElement('button', { onClick: () => this.setState({ liked: true }) }, 'Like'); }
}
ReactDOM.render(React.createElement(LikeButton), document.getElementById('like_button_container'));
