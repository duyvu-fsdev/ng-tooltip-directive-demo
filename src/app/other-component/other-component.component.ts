import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TooltipModule } from "@duyvu-fsdev/ng-tooltip-directive";

@Component({
  selector: "other-component",
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: "./other-component.component.html",
  styleUrl: "./other-component.component.scss",
})
export class OtherComponent {}
