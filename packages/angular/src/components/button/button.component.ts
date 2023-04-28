import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
  selector: "bpds-button",
  templateUrl: './button.component.html',
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {
  @Input()
  label: string

  @Output()
  onClick = new EventEmitter()

  handleClick() {
    this.onClick.emit()
  }
}

export default ButtonComponent
