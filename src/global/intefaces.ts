import React from "react";

export interface IComponentProps { children?: React.ReactNode };

export interface IRoute { path: string, exact: boolean, pathParam?: string[], QueryParam?: string[], content: React.ReactNode }

export interface IRoutesMapping { [key: string] : IRoute }

export interface INavLink { name: string, icon: React.ReactNode, link: string }

export interface INavigationProps { title?: string, children?: React.ReactNode};
