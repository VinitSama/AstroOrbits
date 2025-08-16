import { Component, Input } from '@angular/core';
import { IFeatureCardT2 } from '../../interfaces/ifeature-card-t2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card-t2',
  imports: [
    CommonModule
  ],
  templateUrl: './feature-card-t2.html',
  styleUrl: './feature-card-t2.css'
})
export class FeatureCardT2{
  @Input() card!: IFeatureCardT2;
}
