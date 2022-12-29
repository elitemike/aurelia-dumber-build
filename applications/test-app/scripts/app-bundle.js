define.switchToUserSpace();
define('text!app.css',function(){return ".menu-link {\n  margin: 1rem;\n}\n.menu-link.active {\n  font-weight: bold;\n}";});
define('text!app.html',function(){return "<template>\r\n  <require from=\"./app.css\"></require>\r\n\r\n  <a repeat.for=\"row of router.navigation\" href.bind=\"row.href\"\r\n    class=\"menu-link ${row.isActive ? 'active' : ''}\">${row.title}</a>\r\n\r\n  <div>\r\n    <router-view></router-view>\r\n  </div>\r\n</template>";});
define('app.js',['require','exports','module'],function (require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var App = (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        this.router = router;
        config.title = 'Dumber Demo';
        config.options.pushState = true;
        config.options.root = "/";
        config.map([
            { route: '', name: 'home', title: 'Home', nav: true, moduleId: './home' },
            { route: 'page2', name: 'page2', title: 'Page2', nav: true, moduleId: './page2' },
        ]);
    };
    return App;
}());
exports.App = App;

});

define('text!home.html',function(){return "<template>\r\n  <!-- <require from=\"@packages/dep1/someMarkup\"></require> -->\r\n\r\n  ${message} test ${sum}\r\n\r\n  <some-markup></some-markup>\r\n</template>";});
define('home.js',['require','exports','module','@packages/dep1'],function (require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
var dep1_1 = require("@packages/dep1");
var Home = (function () {
    function Home() {
        this.message = 'Home!';
        this.sum = dep1_1.Utils.add(5, 5);
    }
    return Home;
}());
exports.Home = Home;

});

define('main.js',['require','exports','module','tslib'],function (require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
var tslib_1 = require("tslib");
function configure(aurelia) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    aurelia.use.standardConfiguration();
                    aurelia.use.developmentLogging('info');
                    aurelia.use.plugin("@packages/dep1");
                    return [4, aurelia.start()];
                case 1:
                    _a.sent();
                    return [4, aurelia.setRoot()];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
}
exports.configure = configure;

});

define('text!page2.html',function(){return "<template>\r\n  ${message}\r\n</template>\r\n";});
define('page2.js',['require','exports','module'],function (require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page2 = void 0;
var Page2 = (function () {
    function Page2() {
        this.message = 'Page2';
    }
    return Page2;
}());
exports.Page2 = Page2;

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAuc2NzcyIsInNyYy9hcHAuY3NzIiwic3JjL2FwcC5odG1sIiwic3JjL2FwcC50cyIsInNyYy9ob21lLmh0bWwiLCJzcmMvaG9tZS50cyIsInNyYy9tYWluLnRzIiwic3JjL3BhZ2UyLmh0bWwiLCJzcmMvcGFnZTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FFQUEsRUZDRSxZQUFBO0FDQ0YsQSxNLHlDLFEsQyxDLE8sQyxDLE8sQyxDLE0sQyxDLEM7QURDRSxBLFksQztBLEVBQ0UsSSxDLFlBQUEsRSxDLE8sQyxDLFksQyxDLEMsQyxLLEMsQyxJLEMsQyxDLEM7QUNDSixBLE8sQyxHLEMsQyxDLEksQyxDLEM7QUVIQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFlQSxDQUFDO0FBQUEsSUFaQyxHQUFBLENBQUEsU0FBQSxDQUFBLGVBQWUsQ0FBQSxDQUFBLENBQWYsUUFBQSxDQUFBLENBQWdCLE1BQU0sQ0FBQSxDQUFFLE1BQWMsQ0FBdEMsQ0FBQSxDQUFBO0FBQUEsUUFDRSxJQUFJLENBQUMsTUFBTSxDQUFBLENBQUEsQ0FBRyxNQUFNLENBQUM7QUFBQSxRQUVyQixNQUFNLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBRyxhQUFhLENBQUM7QUFBQSxRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFDO0FBQUEsUUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUEsQ0FBQSxDQUFHLEdBQUcsQ0FBQztBQUFBLFFBRTFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBWDtBQUFBLFlBQ0UsQ0FBQSxDQUFFLEtBQUssQ0FBQSxDQUFFLEVBQUUsQ0FBQSxDQUFFLElBQUksQ0FBQSxDQUFFLE1BQU0sQ0FBQSxDQUFFLEtBQUssQ0FBQSxDQUFFLE1BQU0sQ0FBQSxDQUFFLEdBQUcsQ0FBQSxDQUFFLElBQUksQ0FBQSxDQUFFLFFBQVEsQ0FBQSxDQUFFLFFBQVEsQ0FBQSxDQUFFLENBQXpFO0FBQUEsWUFDQSxDQUFBLENBQUUsS0FBSyxDQUFBLENBQUUsT0FBTyxDQUFBLENBQUUsSUFBSSxDQUFBLENBQUUsT0FBTyxDQUFBLENBQUUsS0FBSyxDQUFBLENBQUUsT0FBTyxDQUFBLENBQUUsR0FBRyxDQUFBLENBQUUsSUFBSSxDQUFBLENBQUUsUUFBUSxDQUFBLENBQUUsU0FBUyxDQUFBLENBQUUsQ0FBakY7QUFBQSxRQUNELENBQUEsQ0FBQyxDQUFDO0FBQUEsSUFDTCxDQUFDLENBQUQ7QUFBQSxJQUNGLE1BQUEsQ0FBQSxHQUFDLENBQUQ7QUFBQSxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFmWSxPQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUc7QUFBQTtBQUFBLENBQUEsQ0FBQSxDQUFBOztBQ0ZoQjtBLE0sMkQsUSxDLEMsTyxDLEMsTyxDLEMsTSxDLEMsQztBLFksQztBLE0sQyxjLEMsTyxDLEMsWSxDLEMsQyxDLEssQyxDLEksQyxDLEMsQztBLE8sQyxJLEMsQyxDLEksQyxDLEM7QUNBQSxHQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUF1QztBQUN2QyxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQUEsUUFDRSxJQUFBLENBQUEsT0FBTyxDQUFBLENBQUEsQ0FBRyxPQUFPLENBQUM7QUFBQSxRQUNsQixJQUFBLENBQUEsR0FBRyxDQUFBLENBQUEsQ0FBRyxNQUFBLENBQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBRSxDQUFDLENBQUMsQ0FBQztBQUFBLElBQ3hCLENBQUM7QUFBQSxJQUFELE1BQUEsQ0FBQSxJQUFDLENBQUQ7QUFBQSxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFIWSxPQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUk7QUFBQTtBQUFBLENBQUEsQ0FBQSxDQUFBOztBLE0sa0QsUSxDLEMsTyxDLEMsTyxDLEMsTSxDLEMsQztBLFksQztBLE0sQyxjLEMsTyxDLEMsWSxDLEMsQyxDLEssQyxDLEksQyxDLEMsQztBLE8sQyxTLEMsQyxDLEksQyxDLEM7QSxHLEMsTyxDLEMsQyxPLEMsTyxDLEM7QUNDakIsUUFBQSxDQUFzQixTQUFTLENBQUMsT0FBZ0IsQ0FBaEQsQ0FBQSxDQUFBO0FBQUEsSSxNLEMsTyxDLFMsQyxJLEMsQyxJLEMsQyxDLEMsSSxDLEMsQyxDLFEsQyxDLEMsQyxDO0EsUSxNLEMsTyxDLFcsQyxJLEMsQyxRLEMsQyxFLEMsQyxDO0EsWSxNLEMsQyxFLEMsSyxDLEMsQztBLGdCLEksQyxDLEM7QSxvQkFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFBLENBQUUsQ0FBQztBQUFBLG9CQUVwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQUEsb0JBR3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFBQSxvQkFFckMsTUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQU0sT0FBTyxDQUFDLEtBQUssQ0FBQSxDQUFFLENBQUEsQ0FBQTtBQUFBLGdCLEksQyxDLEM7QSxvQkFBckIsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFxQixDQUFDO0FBQUEsb0JBQ3RCLE1BQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUEsQ0FBRSxDQUFBLENBQUE7QUFBQSxnQixJLEMsQyxDO0Esb0JBQXZCLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBdUIsQ0FBQztBQUFBLG9CLE0sQyxDLEMsQyxDO0EsWSxDO0EsUSxDLEMsQztBLEksQyxDLEM7QUFDekIsQ0FBQTtBQVhELE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FXQztBQUFBO0FBQUEsQ0FBQSxDQUFBLENBQUE7O0FDYkQ7QSxNLDJDLFEsQyxDLE8sQyxDLE8sQyxDLE0sQyxDLEM7QSxZLEM7QSxNLEMsYyxDLE8sQyxDLFksQyxDLEMsQyxLLEMsQyxJLEMsQyxDLEM7QSxPLEMsSyxDLEMsQyxJLEMsQyxDO0FDQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUFBLElBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUFBLFFBQ0UsSUFBQSxDQUFBLE9BQU8sQ0FBQSxDQUFBLENBQUcsT0FBTyxDQUFDO0FBQUEsSUFDcEIsQ0FBQztBQUFBLElBQUQsTUFBQSxDQUFBLEtBQUMsQ0FBRDtBQUFBLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUZZLE9BQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBSztBQUFBO0FBQUEsQ0FBQSxDQUFBLENBQUEiLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWxpbmsge1xyXG4gIG1hcmdpbjogMXJlbTtcclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbiIsIi5tZW51LWxpbmsge1xuICBtYXJnaW46IDFyZW07XG59XG4ubWVudS1saW5rLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsbnVsbCwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuXHJcbiAgICBjb25maWcudGl0bGUgPSAnRHVtYmVyIERlbW8nO1xyXG4gICAgY29uZmlnLm9wdGlvbnMucHVzaFN0YXRlID0gdHJ1ZTtcclxuICAgIGNvbmZpZy5vcHRpb25zLnJvb3QgPSBcIi9cIjtcclxuXHJcbiAgICBjb25maWcubWFwKFtcclxuICAgICAgeyByb3V0ZTogJycsIG5hbWU6ICdob21lJywgdGl0bGU6ICdIb21lJywgbmF2OiB0cnVlLCBtb2R1bGVJZDogJy4vaG9tZScgfSxcclxuICAgICAgeyByb3V0ZTogJ3BhZ2UyJywgbmFtZTogJ3BhZ2UyJywgdGl0bGU6ICdQYWdlMicsIG5hdjogdHJ1ZSwgbW9kdWxlSWQ6ICcuL3BhZ2UyJyB9LFxyXG4gICAgXSk7XHJcbiAgfVxyXG59IixudWxsLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gXCJAcGFja2FnZXMvZGVwMVwiO1xyXG5leHBvcnQgY2xhc3MgSG9tZSB7XHJcbiAgbWVzc2FnZSA9ICdIb21lISc7XHJcbiAgc3VtID0gVXRpbHMuYWRkKDUsIDUpO1xyXG59IiwiaW1wb3J0IHsgQXVyZWxpYSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xyXG4gIC8vIGF1cmVsaWEudXNlLmZlYXR1cmUoJ3Jlc291cmNlcycpO1xyXG4gIGF1cmVsaWEudXNlLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpO1xyXG5cclxuICAvLyBAaWYgaXNQcm9kdWN0aW9uXHJcbiAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCd3YXJuJyk7XHJcbiAgLy8gQGVuZGlmXHJcbiAgLy8gQGlmICFpc1Byb2R1Y3Rpb25cclxuICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoJ2luZm8nKTtcclxuICAvLyBAZW5kaWZcclxuXHJcbiAgLy8gQGlmIGlzVGVzdFxyXG4gIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XHJcbiAgLy8gQGVuZGlmXHJcblxyXG4gIGF1cmVsaWEudXNlLnBsdWdpbihcIkBwYWNrYWdlcy9kZXAxXCIpO1xyXG5cclxuICBhd2FpdCBhdXJlbGlhLnN0YXJ0KCk7XHJcbiAgYXdhaXQgYXVyZWxpYS5zZXRSb290KCk7XHJcbn1cclxuIixudWxsLCJleHBvcnQgY2xhc3MgUGFnZTIge1xyXG4gIG1lc3NhZ2UgPSAnUGFnZTInO1xyXG59Il0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
