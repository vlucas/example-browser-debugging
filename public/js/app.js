(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Home = require('../components/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Events from '../components/Events';
// import Inbox from '../components/Inbox';
// import Timer from '../components/Timer';

function parseUrl(url) {
  var a = document.createElement('a');
  a.href = url;
  return a;
}

function getComponent(component) {
  var options = {
    'home': function home() {
      return _Home2.default;
    },
    'events': function events() {
      return Events;
    },
    'inbox': function inbox() {
      return Inbox;
    },
    'timer': function timer() {
      return Timer;
    }
  };

  if (typeof options[component] === 'undefined') {
    throw new Error('Specified component not available');
  }

  return options[component]();
}

function renderComponent(componentName) {
  var component = getComponent(componentName);

  console.log('> Component: ', componentName, component);

  $('#content').html(component.render());
}

function handleMenuClick(e) {
  var url = e.target.href;
  var componentName = parseUrl(url).hash.replace('#', '');

  renderComponent(componentName);
}

function init() {
  $('.side-nav a').click(handleMenuClick);
  renderComponent('home');
}

init();

},{"../components/Home":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MAGIC_NUMBER = 2;

function triggerError() {
  var foo = 'bar';

  throw new Error('This is an error that I just triggered! ' + foo);
}

function getMagicNumber() {
  try {
    return 2;
  } finally {
    return 3;
  }
}

function showMagicNumber() {
  $('.magic_number').text(getMagicNumber());
}

function render() {
  return '\n    <div>\n      <h2>Homepage</h2>\n      <p><a class="button button-warn" onClick=' + function () {
    return triggerError();
  } + '>Trigger Error</a></p>\n      <p>&nbsp;</p>\n      <p><a class="button" onClick="">Show Magic Number ({MAGIC_NUMBER})</a> ({this.state.MAGIC_NUMBER})</p>\n      <p>&nbsp;</p>\n      <p>Something here</p>\n    </div>\n  ';
}

exports.default = { render: render };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvaW5kZXguanMiLCJjb21wb25lbnRzL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsUUFBVCxDQUFtQixHQUFuQixFQUF5QjtBQUN2QixNQUFJLElBQUksU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQVI7QUFDQSxJQUFFLElBQUYsR0FBUyxHQUFUO0FBQ0EsU0FBTyxDQUFQO0FBQ0Q7O0FBRUQsU0FBUyxZQUFULENBQXNCLFNBQXRCLEVBQWlDO0FBQy9CLE1BQUksVUFBVTtBQUNaLFlBQVE7QUFBQTtBQUFBLEtBREk7QUFFWixjQUFVO0FBQUEsYUFBTSxNQUFOO0FBQUEsS0FGRTtBQUdaLGFBQVM7QUFBQSxhQUFNLEtBQU47QUFBQSxLQUhHO0FBSVosYUFBUztBQUFBLGFBQU0sS0FBTjtBQUFBO0FBSkcsR0FBZDs7QUFPQSxNQUFJLE9BQU8sUUFBUSxTQUFSLENBQVAsS0FBOEIsV0FBbEMsRUFBK0M7QUFDN0MsVUFBTSxJQUFJLEtBQUosQ0FBVSxtQ0FBVixDQUFOO0FBQ0Q7O0FBRUQsU0FBTyxRQUFRLFNBQVIsR0FBUDtBQUNEOztBQUVELFNBQVMsZUFBVCxDQUF5QixhQUF6QixFQUF3QztBQUN0QyxNQUFJLFlBQVksYUFBYSxhQUFiLENBQWhCOztBQUVBLFVBQVEsR0FBUixDQUFZLGVBQVosRUFBNkIsYUFBN0IsRUFBNEMsU0FBNUM7O0FBRUEsSUFBRSxVQUFGLEVBQWMsSUFBZCxDQUFtQixVQUFVLE1BQVYsRUFBbkI7QUFDRDs7QUFFRCxTQUFTLGVBQVQsQ0FBeUIsQ0FBekIsRUFBNEI7QUFDMUIsTUFBSSxNQUFNLEVBQUUsTUFBRixDQUFTLElBQW5CO0FBQ0EsTUFBSSxnQkFBZ0IsU0FBUyxHQUFULEVBQWMsSUFBZCxDQUFtQixPQUFuQixDQUEyQixHQUEzQixFQUFnQyxFQUFoQyxDQUFwQjs7QUFFQSxrQkFBZ0IsYUFBaEI7QUFDRDs7QUFHRCxTQUFTLElBQVQsR0FBZ0I7QUFDZCxJQUFFLGFBQUYsRUFBaUIsS0FBakIsQ0FBdUIsZUFBdkI7QUFDQSxrQkFBZ0IsTUFBaEI7QUFDRDs7QUFFRDs7Ozs7Ozs7QUNqREEsSUFBTSxlQUFlLENBQXJCOztBQUVBLFNBQVMsWUFBVCxHQUF3QjtBQUN0QixNQUFJLE1BQU0sS0FBVjs7QUFFQSxRQUFNLElBQUksS0FBSixDQUFVLDZDQUE2QyxHQUF2RCxDQUFOO0FBQ0Q7O0FBRUQsU0FBUyxjQUFULEdBQTBCO0FBQ3hCLE1BQUk7QUFDRixXQUFPLENBQVA7QUFDRCxHQUZELFNBR1E7QUFDTixXQUFPLENBQVA7QUFDRDtBQUNGOztBQUVELFNBQVMsZUFBVCxHQUEyQjtBQUN6QixJQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsZ0JBQXhCO0FBQ0Q7O0FBRUQsU0FBUyxNQUFULEdBQWtCO0FBQ2hCLG1HQUcrQztBQUFBLFdBQU0sY0FBTjtBQUFBLEdBSC9DO0FBVUQ7O2tCQUVjLEVBQUUsY0FBRixFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lJztcbi8vIGltcG9ydCBFdmVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9FdmVudHMnO1xuLy8gaW1wb3J0IEluYm94IGZyb20gJy4uL2NvbXBvbmVudHMvSW5ib3gnO1xuLy8gaW1wb3J0IFRpbWVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGltZXInO1xuXG5mdW5jdGlvbiBwYXJzZVVybCggdXJsICkge1xuICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5ocmVmID0gdXJsO1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICAnaG9tZSc6ICgpID0+IEhvbWUsXG4gICAgJ2V2ZW50cyc6ICgpID0+IEV2ZW50cyxcbiAgICAnaW5ib3gnOiAoKSA9PiBJbmJveCxcbiAgICAndGltZXInOiAoKSA9PiBUaW1lcixcbiAgfTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnNbY29tcG9uZW50XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NwZWNpZmllZCBjb21wb25lbnQgbm90IGF2YWlsYWJsZScpO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnNbY29tcG9uZW50XSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50TmFtZSkge1xuICBsZXQgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KGNvbXBvbmVudE5hbWUpO1xuXG4gIGNvbnNvbGUubG9nKCc+IENvbXBvbmVudDogJywgY29tcG9uZW50TmFtZSwgY29tcG9uZW50KTtcblxuICAkKCcjY29udGVudCcpLmh0bWwoY29tcG9uZW50LnJlbmRlcigpKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgbGV0IHVybCA9IGUudGFyZ2V0LmhyZWY7XG4gIGxldCBjb21wb25lbnROYW1lID0gcGFyc2VVcmwodXJsKS5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpO1xufVxuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICQoJy5zaWRlLW5hdiBhJykuY2xpY2soaGFuZGxlTWVudUNsaWNrKTtcbiAgcmVuZGVyQ29tcG9uZW50KCdob21lJyk7XG59XG5cbmluaXQoKTtcbiIsImNvbnN0IE1BR0lDX05VTUJFUiA9IDI7XG5cbmZ1bmN0aW9uIHRyaWdnZXJFcnJvcigpIHtcbiAgbGV0IGZvbyA9ICdiYXInO1xuXG4gIHRocm93IG5ldyBFcnJvcignVGhpcyBpcyBhbiBlcnJvciB0aGF0IEkganVzdCB0cmlnZ2VyZWQhICcgKyBmb28pO1xufVxuXG5mdW5jdGlvbiBnZXRNYWdpY051bWJlcigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gMjtcbiAgfVxuICBmaW5hbGx5IHtcbiAgICByZXR1cm4gMztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93TWFnaWNOdW1iZXIoKSB7XG4gICQoJy5tYWdpY19udW1iZXInKS50ZXh0KGdldE1hZ2ljTnVtYmVyKCkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBgXG4gICAgPGRpdj5cbiAgICAgIDxoMj5Ib21lcGFnZTwvaDI+XG4gICAgICA8cD48YSBjbGFzcz1cImJ1dHRvbiBidXR0b24td2FyblwiIG9uQ2xpY2s9JHsoKSA9PiB0cmlnZ2VyRXJyb3IoKX0+VHJpZ2dlciBFcnJvcjwvYT48L3A+XG4gICAgICA8cD4mbmJzcDs8L3A+XG4gICAgICA8cD48YSBjbGFzcz1cImJ1dHRvblwiIG9uQ2xpY2s9XCJcIj5TaG93IE1hZ2ljIE51bWJlciAoe01BR0lDX05VTUJFUn0pPC9hPiAoe3RoaXMuc3RhdGUuTUFHSUNfTlVNQkVSfSk8L3A+XG4gICAgICA8cD4mbmJzcDs8L3A+XG4gICAgICA8cD5Tb21ldGhpbmcgaGVyZTwvcD5cbiAgICA8L2Rpdj5cbiAgYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyByZW5kZXIgfTtcbiJdfQ==
