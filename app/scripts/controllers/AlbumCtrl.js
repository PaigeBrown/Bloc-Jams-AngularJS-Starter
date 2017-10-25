// var albumData = albumPicasso
//
// var albumData= function ($scope) {
//   $scope.title = The Colors;
//   $scope.artist = Pablo Picasso;
//   $scope.release-info = 1909 Spanish Records;
// }
//
//
// <div class="album-view-details column half">
//                   <h2 class="album-view-title">{{ album.albumData.title}}</h2>
//                   <h3 class="album-view-artist">Pablo Picasso</h3>
//                   <h5 class="album-view-release-info">1909 Spanish Records</h5>
//               </div>


(function() {
    function AlbumCtrl(Fixtures, SongPlayer) {
       this.albumData = Fixtures.getAlbum();
       this.songPlayer = SongPlayer;
    }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
 })();
