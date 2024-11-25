import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { MyComponent } from "./my-component/my-component.component";
import { OtherComponent } from "./other-component/other-component.component";
import { Option, TooltipModule } from "@duyvu-fsdev/ng-tooltip-directive";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TooltipModule,
    MyComponent,
    OtherComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "test";

  tooltipOptionbottom: Option = { text: "bottom", position: "bottom" };
  tooltipOptionleft: Option = { text: "left", position: "left" };
  tooltipOptionright: Option = { text: "right", position: "right" };
  tooltipOptiontop: Option = { text: "top", position: "top" };
  tooltipOption: Option = { text: "default" };
}
