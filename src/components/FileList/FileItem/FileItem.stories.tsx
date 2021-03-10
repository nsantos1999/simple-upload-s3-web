import { Story, Meta } from "@storybook/react/types-6-0";
import { IFile } from "../../../context/FileContext";
import { v4 as uuidv4 } from "uuid";

import { FileItem, FileItemProps } from "./index";
import fileSize from "filesize";

export default {
  title: "File/FileItem",
  component: FileItem,
} as Meta;

const Template: Story<FileItemProps> = (args) => <FileItem {...args} />;

const fileUploadedExample: IFile = {
  id: uuidv4(),
  name: "Upload test",
  preview:
    "https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm_400x400.png",
  readableSize: fileSize(24000),
  url:
    "https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm_400x400.png",
  error: false,
  progress: 100,
  uploaded: true,
  file: null,
};

export const Primary = Template.bind({});
Primary.args = {
  uploadedFile: fileUploadedExample,
};

export const Error = Template.bind({});
Error.args = {
  uploadedFile: {
    ...fileUploadedExample,
    error: true,
    uploaded: false,
  },
};

export const Uploading = Template.bind({});
Uploading.args = {
  uploadedFile: {
    ...fileUploadedExample,
    uploaded: false,
    progress: 88,
  },
};
