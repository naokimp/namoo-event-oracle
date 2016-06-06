// $.getDate. 날짜를 PHP 스타일로 변경. 모든걸 지원하는건 아니고, 자주 쓰는 것들만. - 2011.03.09 bitofsky@naver.com
// 펌/수정/재배포는 원작자 표기 유지를 전제로 가능 합니다.(copyright)
(function($){
  $.extend({
    getDate: function( str, time ){
      if( time === undefined ) time = $.now();
      if( time.length == 14 && !isNaN(time) ){
        var time = String(time);
        var sp   = [time.substr(0,4),time.substr(4,2),time.substr(6,2),time.substr(8,2),time.substr(10,2),time.substr(12,2)];
        var date = new Date(sp[0]||null,(sp[1]-1)||null,sp[2]||null,sp[3]||null,sp[4]||null,sp[5]||null,sp[6]||null);
      }
      else if( isNaN(Date.parse(time)) && isNaN(new Date(time)) ){
        var sp   = String(time).split(/\D/);
        var date = new Date(sp[0]||null,(sp[1]-1)||null,sp[2]||null,sp[3]||null,sp[4]||null,sp[5]||null,sp[6]||null);
      }
      else
        var date = new Date( time );

      return str.replace(/(Y|y|n|m|d|j|a|A|g|G|h|H|i|s|DD|ll|D|l)/g, function( word ){
        switch( word ){
          case "Y": return date.getFullYear(); break;
          case "y": return String(date.getFullYear()).substring(2,4); break;
          case "n": return Number(date.getMonth())+1; break;
          case "m": return (date.getMonth() < 9 ? "0" : "" )+(date.getMonth()+1); break;
          case "d": return (date.getDate() < 10 ? "0" : "" )+date.getDate(); break;
          case "j": return date.getDate(); break;
          case "a": return (date.getHours() < 12 ? "am":"pm"); break;
          case "A": return (date.getHours() < 12 ? "AM":"PM"); break;
          case "g": return (date.getHours() < 12 ? date.getHours() : Number(date.getHours())-12); break;
          case "G": return date.getHours(); break;
          case "h": var tmp = (date.getHours() < 12 ? date.getHours() : Number(date.getHours())-12); return (tmp < 10 ? "0":"" )+tmp; break;
          case "H": return (date.getHours() < 10 ? "0" : "" )+date.getHours(); break;
          case "i": return (date.getMinutes() < 10 ? "0" : "" )+date.getMinutes(); break;
          case "s": return (date.getSeconds() < 10 ? "0" : "" )+date.getSeconds(); break;
          case "D": return ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][date.getDay()]; break;
          case "l": return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][date.getDay()]; break;
          case "DD": return ["일","월","화","수","목","금","토"][date.getDay()]; break;
          case "ll": return ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"][date.getDay()]; break;
          default : return word;
        }
      });
    }
  });
})(jQuery);