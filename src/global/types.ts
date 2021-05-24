import React from "react";

export type ComponentPropsType = { children?: React.ReactNode };

export type RouteType = { path: string, exact: boolean, pathParam?: string[], QueryParam?: string[], content: React.ReactNode }

export type RoutesMapping = { [key: string] : RouteType }

export type NavLinkType = { name: string, icon: React.ReactNode, link: string }

export type NavigationPropsType = { title?: string, children?: React.ReactNode};