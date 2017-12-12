import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {

  constructor(private router: Router, private albumService: AlbumService){}

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }


  albums: Album[] = [
  new Album("Piper At The Gates of Dawn", "Pink Floyd",
      "A groundbreaking album. Way better than Pulse.", 1),
  new Album("Funhouse", "The Stooges",
      "The second  album from the American rock band, released in 1970 by Elektra Records.", 2),
  new Album("Twilight of the Thunder God", "Amon Amarth",
      "Seventh album by the Swedish band, released in 2008, based on Thor's battle with the serpent Jörmungandr.", 3),
  new Album("Rid of Me", "PJ Harvey",
      "One of her most acclaimed album, released in 1993.", 4),
  new Album("Chopin - Complete Nocturnes", "Brigitte Engerer",
      "Released in 2010, this is Engerer's own rendition of the classical composer Chopin.", 5),
  new Album("Axis Bold As Love", "The Jimi Hendrix Experience",
      "Second studio album by the English-American band, released in 1967.", 6)
  ];

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  };
}
