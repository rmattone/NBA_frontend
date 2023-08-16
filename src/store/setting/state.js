// Initial Setting State
export const initialState = {
  "saveLocal": "sessionStorage",
  "storeKey": "huisetting-vue",
  "setting": {
      "app_name": {
          "target": "[data-setting=\"app_name\"]",
          "choices": [],
          "type": "text",
          "value": "Centro Israelita"
      },
      "theme_scheme_direction": {
          "target": "html",
          "choices": [
              "ltr",
              "rtl"
          ],
          "type": "layout_design",
          "value": "ltr"
      },
      "theme_scheme": {
          "target": "body",
          "choices": [
              "light",
              "dark",
              "auto"
          ],
          "type": "layout_design",
          "value": "light"
      },
      "theme_style_appearance": {
          "target": "body",
          "choices": [
              "theme-default",
              "theme-flat",
              "theme-bordered",
              "theme-sharp"
          ],
          "type": "layout_design",
          "value": [
              "theme-default"
          ]
      },
      "theme_color": {
          "target": "body",
          "choices": [
              "theme-color-blue",
              "theme-color-gray",
              "theme-color-red",
              "theme-color-yellow",
              "theme-color-pink",
              "theme-color-default"
          ],
          "type": "default",
          "colors": {
              "--{{prefix}}primary": "#2398cb",
              "--{{prefix}}info": "#e0cf76"
          },
          "value": "custom"
      },
      "theme_transition": {
          "target": "body",
          "choices": [
              "theme-without-animation",
              "theme-with-animation"
          ],
          "type": "layout_design",
          "value": "theme-with-animation"
      },
      "theme_font_size": {
          "target": "html",
          "choices": [
              "theme-fs-sm",
              "theme-fs-md",
              "theme-fs-lg"
          ],
          "type": "layout_design",
          "value": "theme-fs-md"
      },
      "page_layout": {
          "target": "#page_layout",
          "choices": [
              "container",
              "container-fluid"
          ],
          "type": "layout_design",
          "value": "container"
      },
      "header_navbar": {
          "target": ".iq-navbar",
          "choices": [
              "default",
              "fixed",
              "navs-sticky",
              "nav-glass",
              "navs-transparent",
              "boxed",
              "hidden"
          ],
          "type": "layout_design",
          "value": "navs-default"
      },
      "header_banner": {
          "target": ".iq-banner",
          "choices": [
              "default",
              "navs-bg-color",
              "hide"
          ],
          "type": "layout_design",
          "value": "default"
      },
      "sidebar_color": {
          "target": "[data-toggle=\"main-sidebar\"]",
          "choices": [
              "sidebar-white",
              "sidebar-dark",
              "sidebar-color",
              "sidebar-transparent",
              "sidebar-glass"
          ],
          "type": "layout_design",
          "value": "sidebar-white"
      },
      "sidebar_type": {
          "target": "[data-toggle=\"main-sidebar\"]",
          "choices": [
              "sidebar-hover",
              "sidebar-mini",
              "sidebar-boxed",
              "sidebar-soft"
          ],
          "type": "layout_design",
          "value": [
              "sidebar-soft"
          ]
      },
      "sidebar_show": {
          "target": "[data-toggle=\"main-sidebar\"]",
          "choices": [
              "sidebar-none"
          ],
          "type": "defaultChecked",
          "value": []
      },
      "navbar_show": {
          "target": "[data-toggle=\"main-navbar\"]",
          "choices": [
              "iq-navbar-none"
          ],
          "type": "defaultChecked",
          "value": []
      },
      "sidebar_menu_style": {
          "target": "[data-toggle=\"main-sidebar\"]",
          "choices": [
              "slidebar-default navs-rounded",
              "slidebar-default navs-rounded-all",
              "slidebar-default navs-pill",
              "slidebar-default navs-pill-all",
              "left-bordered",
              "slidebar-default navs-full-width"
          ],
          "type": "layout_design",
          "value": "sidebar-default navs-full-width"
      },
      "card_style": {
          "target": "body",
          "choices": [
              "card-default",
              "card-glass",
              "card-transparent"
          ],
          "type": "layout_design",
          "value": "card-default"
      },
      "footer_style": {
          "target": ".footer",
          "choices": [
              "sticky",
              "default",
              "glass"
          ],
          "type": "layout_design",
          "value": "sticky"
      },
      "body_font_family": {
          "target": "body",
          "choices": [],
          "type": "variable",
          "value": "Noto Sans SC"
      },
      "heading_font_family": {
          "target": "heading",
          "choices": [],
          "type": "variable",
          "value": "Noto Sans SC"
      }
  }
};

// Default Setting State
export const defaultState = {
  "saveLocal": "sessionStorage",
  "storeKey": "huisetting-vue",
  "setting": {
      "app_name": {
          "target": "[data-setting=\"app_name\"]",
          "choices": [],
          "type": "text",
          "value": "Centro Israelita"
      },
      "theme_scheme_direction": {
          "target": "html",
          "choices": [
              "ltr",
              "rtl"
          ],
          "type": "layout_design",
          "value": "ltr"
      },
      "theme_scheme": {
          "target": "body",
          "choices": [
              "light",
              "dark",
              "auto"
          ],
          "type": "layout_design",
          "value": "light"
      },
      "theme_style_appearance": {
          "target": "body",
          "choices": [
              "theme-default",
              "theme-flat",
              "theme-bordered",
              "theme-sharp"
          ],
          "type": "layout_design",
          "value": [
              "theme-default"
          ]
      },
      "theme_color": {
          "target": "body",
          "choices": [
              "theme-color-blue",
              "theme-color-gray",
              "theme-color-red",
              "theme-color-yellow",
              "theme-color-pink",
              "theme-color-default"
          ],
          "type": "default",
          "colors": {
              "--{{prefix}}primary": "#2398cb",
              "--{{prefix}}info": "#e0cf76"
          },
          "value": "custom"
      },
      "theme_transition": {
          "target": "body",
          "choices": [
              "theme-without-animation",
              "theme-with-animation"
          ],
          "type": "layout_design",
          "value": "theme-with-animation"
      },
      "theme_font_size": {
          "target": "html",
          "choices": [
              "theme-fs-sm",
              "theme-fs-md",
              "theme-fs-lg"
          ],
          "type": "layout_design",
          "value": "theme-fs-md"
      },
      "page_layout": {
          "target": "#page_layout",
          "choices": [
              "container",
              "container-fluid"
          ],
          "type": "layout_design",
          "value": "container"
      },
      "header_navbar": {
          "target": ".iq-navbar",
          "choices": [
              "default",
              "fixed",
              "navs-sticky",
              "nav-glass",
              "navs-transparent",
              "boxed",
              "hidden"
          ],
          "type": "layout_design",
          "value": "navs-default"
      },
      "header_banner": {
          "target": ".iq-banner",
          "choices": [
              "default",
              "navs-bg-color",
              "hide"
          ],
          "type": "layout_design",
          "value": "default"
      },
      "sidebar_color": {
          "target": "[data-toggle=\"main-sidebar\"]",
          "choices": [
              "sidebar-white",
              "sidebar-dark",
              "sidebar-color",
              "sidebar-transparent",
              "sidebar-glass"
          ],
          "type": "layout_design",
          "value": "sidebar-white"
      },
      "sidebar_type": {
          "target": "[data-toggle=\"main-sidebar\"]",
          "choices": [
              "sidebar-hover",
              "sidebar-mini",
              "sidebar-boxed",
              "sidebar-soft"
          ],
          "type": "layout_design",
          "value": [
              "sidebar-soft"
          ]
      },
      "sidebar_show": {
          "target": "[data-toggle=\"main-sidebar\"]",
          "choices": [
              "sidebar-none"
          ],
          "type": "defaultChecked",
          "value": []
      },
      "navbar_show": {
          "target": "[data-toggle=\"main-navbar\"]",
          "choices": [
              "iq-navbar-none"
          ],
          "type": "defaultChecked",
          "value": []
      },
      "sidebar_menu_style": {
          "target": "[data-toggle=\"main-sidebar\"]",
          "choices": [
              "slidebar-default navs-rounded",
              "slidebar-default navs-rounded-all",
              "slidebar-default navs-pill",
              "slidebar-default navs-pill-all",
              "left-bordered",
              "slidebar-default navs-full-width"
          ],
          "type": "layout_design",
          "value": "sidebar-default navs-full-width"
      },
      "card_style": {
          "target": "body",
          "choices": [
              "card-default",
              "card-glass",
              "card-transparent"
          ],
          "type": "layout_design",
          "value": "card-default"
      },
      "footer_style": {
          "target": ".footer",
          "choices": [
              "sticky",
              "default",
              "glass"
          ],
          "type": "layout_design",
          "value": "sticky"
      },
      "body_font_family": {
          "target": "body",
          "choices": [],
          "type": "variable",
          "value": "Noto Sans SC"
      },
      "heading_font_family": {
          "target": "heading",
          "choices": [],
          "type": "variable",
          "value": "Noto Sans SC"
      }
  }
};
