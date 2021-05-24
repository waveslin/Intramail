import React from "react";

export interface ComponentPropsType { children?: React.ReactNode };

export interface RouteType { path: string, exact: boolean, pathParam?: string[], QueryParam?: string[], content: React.ReactNode }

export interface RoutesMappingType { [key: string] : RouteType }

export interface NavLinkType { name: string, icon: React.ReactNode, link: string }

export interface NavigationPropsType { title?: string, children?: React.ReactNode};
