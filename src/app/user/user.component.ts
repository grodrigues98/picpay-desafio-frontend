import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() id: number
  @Input() name: string
  @Input() image: string
  @Input() username: string

  constructor() { }

  ngOnInit() { }

}
