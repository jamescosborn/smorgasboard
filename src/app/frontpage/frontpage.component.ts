import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css'],
  providers: [AlbumService]
})
export class FrontpageComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private albumService: AlbumService) {}

  ngOnInit() {
    this.albums = this.albumService.getAlbums();

  }

  goToDetailPage(clickedAlbum) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  };
}
