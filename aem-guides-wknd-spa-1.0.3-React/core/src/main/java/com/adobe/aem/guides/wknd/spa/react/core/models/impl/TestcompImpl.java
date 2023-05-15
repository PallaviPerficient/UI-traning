package com.adobe.aem.guides.wknd.spa.react.core.models.impl; 
import com.adobe.cq.export.json.ComponentExporter; 
import com.adobe.cq.export.json.ExporterConstants; 
import org.apache.sling.api.SlingHttpServletRequest; 
import org.apache.sling.api.resource.Resource; 
import org.apache.sling.models.annotations.*; 
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue; 
import com.adobe.aem.guides.wknd.spa.react.core.models.Testcomp;

@Model( adaptables = { Resource.class, SlingHttpServletRequest.class }, 
adapters = { Testcomp.class, ComponentExporter.class }, 
 resourceType = TestcompImpl.RESOURCE_TYPE, 
 defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL )
 @Exporter(  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
  extensions = ExporterConstants.SLING_MODEL_EXTENSION )

  public class TestcompImpl implements Testcomp { 
    @ValueMapValue 
    private String textTitle;
    @ValueMapValue private String description;
     static final String RESOURCE_TYPE = "wknd-spa-react/components/aemcomp"; 
     @Override 
    public String getTitle() { 
        return textTitle; 
    } 
    @Override  
    public String getDescription() { 
        return description; 
    }
    @Override 
    public String getExportedType() { 
        return RESOURCE_TYPE; 
    } 
}