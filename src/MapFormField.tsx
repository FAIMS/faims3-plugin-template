/*
 * Copyright 2021 Macquarie University
 *
 * Licensed under the Apache License Version 2.0 (the, "License");
 * you may not use, this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND either express or implied.
 * See, the License, for the specific language governing permissions and
 * limitations under the License.
 *
 * Filename: MapFormField.tsx
 * Description:
 *   Implement MapFormField for entry of data via maps in FAIMS
 */

import React, { useState } from 'react'
import Feature from 'ol/Feature'
import './MapFormField.css'
import MapWrapper from './MapWrapper'
import Button from '@material-ui/core/Button'
import { FieldProps } from 'formik'

interface MapFieldProps extends FieldProps {
  featureType: 'Point' | 'Polygon' | 'LineString'
  center?: Array<number>
  zoom?: number
}

function MapFormField({ field, form, ...props }: MapFieldProps) {
  const [showMap, setShowMap] = useState(false)
  const [drawnFeatures, setDrawnFeatures] = useState<Array<Feature<any>>>([])

  let zoom = 12
  let center = [151.11224773567673, -33.773807355279104]

  if (props.zoom) {
    zoom = props.zoom
  }

  if (props.center) {
    center = props.center
  }

  const mapCallback = (theFeatures: any) => {
    setDrawnFeatures(theFeatures)
    setShowMap(false)

    form.setFieldValue(field.name, theFeatures)
  }

  if (showMap) {
    window.scrollTo(0, 0)
    return (
      <div>
        <MapWrapper
          featureType={props.featureType}
          features={drawnFeatures}
          zoom={zoom}
          center={center}
          callbackFn={mapCallback}
        />
      </div>
    )
  } else {
    return (
      <div>
        <Button
          variant='contained'
          className='map-button'
          onClick={() => setShowMap(true)}
        >
          Get {props.featureType}
        </Button>
      </div>
    )
  }
}

export { MapFormField }
