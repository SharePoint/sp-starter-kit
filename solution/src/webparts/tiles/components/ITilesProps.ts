import { WebPartContext } from '@microsoft/sp-webpart-base';
import { ITilesWebPartProps } from './../TilesWebPart';
import { DisplayMode } from '@microsoft/sp-core-library';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

export interface ITilesProps extends ITilesWebPartProps {
  displayMode: DisplayMode;

  fUpdateProperty: (value: string) => void;
  fPropertyPaneOpen: () => void;
  themeVariant: IReadonlyTheme | undefined;
}
