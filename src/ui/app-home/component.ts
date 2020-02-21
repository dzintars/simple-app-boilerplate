import {
  LitElement,
  customElement,
  TemplateResult,
  css,
  unsafeCSS,
  CSSResult
} from "lit-element";
import template from "./template";
import styles from "./styles.scss";

@customElement("app-home")
export class AppHomeElement extends LitElement {
  protected render(): TemplateResult {
    return template.call(this);
  }

  public static get styles(): CSSResult {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
