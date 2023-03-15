package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;

import com.adobe.aem.guides.wknd.spa.react.core.models.TextImage;
import com.adobe.aem.guides.wknd.spa.react.core.models.FordPlus;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { TextImage.class,
    ComponentExporter.class }, resourceType = TextImageImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class FordPlusImpl implements FordPlus {

    @ValueMapValue private String title;

    @ValueMapValue private String text;
  
    @ValueMapValue private String selectionType;
  
    @ValueMapValue private String imagePath;
  
    @ValueMapValue private String bgimagePath;
  
    @ValueMapValue private String videoUrl;
  
    @ValueMapValue private String urlType;
  
    @ValueMapValue private String videoThumbnail;
  
    @ValueMapValue private String link;
  
    @ValueMapValue private String linkText;
  
    @ValueMapValue private String linkTarget;

    static final String RESOURCE_TYPE = "wknd-spa-react/components/fordplus";

    @Override
    public String getTitle() {
      return title;
    }
  
    @Override
    public String getText() {
      return text;
    }
  
    @Override
    public String getSelectionType() {
      return selectionType;
    }
  
        
    @Override
    public String getBGImagePath() {
        return bgimagePath;
    }

    @Override
    public String getVideoUrl() {
        return videoUrl;
    }

    @Override
    public String getUrlType() {
        return urlType;
    }



    @Override
    public String getLinkText() {
        return linkText;
    }

    @Override
    public String getLinkTarget() {
        return linkTarget;
    }

    
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}   