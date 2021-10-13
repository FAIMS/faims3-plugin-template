import React, { useState } from 'react'
import Feature from 'ol/Feature'
import './MapFormField.css'
import MapWrapper from './MapWrapper'
import Button from '@material-ui/core/Button'
import { FieldProps } from 'formik'

interface MapFieldProps extends FieldProps {
  featureType: 'Point' | 'Polygon' | 'Circle' | 'LineString'
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
