import * as mongoose from 'mongoose';
import { Song, SongSchema } from './song';

export interface Album {
  title: string;
  artist: string;
  date: Date;
  genre: string;
  song: Song[];
}

export interface AlbumDocument extends Album, mongoose.Document {
}

export let AlbumSchema: mongoose.Schema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    maxlength: 100
  },
  artist: {
    type: String,
    trim: true,
    maxlength: 100,
    index: true
  },
  date: {
    type: Date,
    min: new Date(1900, 0, 1),
    max: Date.now()
  },
  genre: {
    type: String,
    enum: [
      'Pop',
      'Rock',
      'Jazz',
      'Blues',
      'Country',
      'Classical',
      'Reggae',
      'Disco'
    ]
  },
  song: {
    type: SongSchema,
    ref: 'Song'
  }
});

export let AlbumModel: mongoose.Model<AlbumDocument> = mongoose.model<AlbumDocument>('Song', AlbumSchema);
