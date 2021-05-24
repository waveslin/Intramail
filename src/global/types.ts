import React from "react";

export type ComponentPropsType = { children?: React.ReactNode };

export type RouteType = { path: string, exact: boolean, pathParam?: string[], QueryParam?: string[] }

export type RoutesMapping = { [key: string] : RouteType }

export type NavLinkType = { name: string, icon: string, link: RouteType }

export type NavigationPropsType = { title?: string, children?: React.ReactNode};