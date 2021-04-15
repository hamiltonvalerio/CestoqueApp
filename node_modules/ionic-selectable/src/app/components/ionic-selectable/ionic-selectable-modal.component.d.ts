import { AfterViewInit, ElementRef } from '@angular/core';
import { Content, NavParams, Searchbar } from 'ionic-angular';
import { IonicSelectableComponent } from './ionic-selectable.component';
export declare class IonicSelectableModalComponent implements AfterViewInit {
    private navParams;
    _element: ElementRef;
    _cssClass: boolean;
    readonly _canClearCssClass: boolean;
    readonly _isMultipleCssClass: boolean;
    readonly _isSearchingCssClass: boolean;
    readonly _isAddItemTemplateVisibleCssClass: boolean;
    readonly _isIos: boolean;
    _isMD(): boolean;
    _searchbarComponent: Searchbar;
    _content: Content;
    selectComponent: IonicSelectableComponent;
    _header: HTMLElement;
    constructor(navParams: NavParams, _element: ElementRef);
    ngAfterViewInit(): void;
}
