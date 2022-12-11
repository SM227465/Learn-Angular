import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() allCourses: number = 0;
  @Input() freeCourses: number = 0;
  @Input() premiumCourses: number = 0;
}
