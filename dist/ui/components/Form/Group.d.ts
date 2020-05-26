import * as React from 'react';
export interface Props {
    children: React.ReactNode;
    /**
     * Label for group. This label also usage as title.
     */
    label: string;
}
export default class Group extends React.Component<Props> {
    render(): React.ReactNode;
}
