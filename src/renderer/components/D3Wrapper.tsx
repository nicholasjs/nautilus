/**
 * ************************************
 *
 * @module  D3Wrapper.tsx
 * @author
 * @date 3/11/20
 * @description Container to hold all the d3 visualation components
 *
 * ************************************
 */
import React from 'react';
import ServicesWrapper from './ServicesWrapper';
import FileSelector from './FileUpload';
import VolumesWrapper from './VolumesWrapper';

//type import
import { FileUpload, Services, SetSelectedContainer, Options } from '../App.d';

type Props = {
  fileUpload: FileUpload;
  setSelectedContainer: SetSelectedContainer;
  fileUploaded: boolean;
  services: Services;
  options: Options;
  volumes: Array<ReadOnlyObj>;
};

const D3Wrapper: React.FC<Props> = ({
  fileUploaded,
  fileUpload,
  services,
  setSelectedContainer,
  options,
  volumes,
}) => {
  return (
    <div className="d3-wrapper">
      {!fileUploaded ? (
        <FileSelector fileUpload={fileUpload} />
      ) : (
        <>
          <ServicesWrapper
            services={services}
            setSelectedContainer={setSelectedContainer}
            options={options}
          />
          <VolumesWrapper volumes={volumes} />
        </>
      )}
    </div>
  );
};

export default D3Wrapper;
