function SaveStateManager(Iodine) {
    this.Iodine = Iodine;
    this.slot = [];
    this.iocore = []
}

SaveStateManager.prototype.saveState = function (slot) {
    let playing = this.Iodine.emulatorStatus <= 10;
    if (playing) this.Iodine.pause();
    this.slot[slot] = new SaveState(this.Iodine.IOCore);
    if (playing) this.Iodine.play();
}

SaveStateManager.prototype.loadState = function (slot) {
    let playing = this.Iodine.emulatorStatus <= 10;
    if (playing) this.Iodine.pause();
    this.slot[slot].load(this.Iodine.IOCore);
    if (playing) this.Iodine.play();
}

function SaveState(arg) {
    // this.IOCore = IOCore;   
    if (arg.IOCore) {
    /* General */
    this.accumulatedClocks            = structuredClone(IOCore.accumulatedClocks            );
    this.cyclesOveriteratedPreviously = structuredClone(IOCore.cyclesOveriteratedPreviously );
    this.cyclesToIterate              = structuredClone(IOCore.cyclesToIterate              );
    this.graphicsClocks               = structuredClone(IOCore.graphicsClocks               );
    this.nextEventClocks              = structuredClone(IOCore.nextEventClocks              );
    this.systemStatus                 = structuredClone(IOCore.systemStatus                 );
    this.timerClocks                  = structuredClone(IOCore.timerClocks                  );

    /* Memory */
    this.internalRAM               = structuredClone(IOCore.memory.internalRAM             );
    this.externalRAM               = structuredClone(IOCore.memory.externalRAM             );
    this.WRAMControlFlags          = structuredClone(IOCore.memory.WRAMControlFlags        );
    this.lastBIOSREAD              = structuredClone(IOCore.memory.lastBIOSREAD            );
  
    /* DMA */
    this.dma = {};  
    this.dma.currentMatch          = structuredClone(IOCore.dma.currentMatch               );
    this.dma.fetch                 = structuredClone(IOCore.dma.fetch                      );

    this.dma0 = {}; 
    this.dma0.destination          = structuredClone(IOCore.dmaChannel0.destination        );     
    this.dma0.destinationControl   = structuredClone(IOCore.dmaChannel0.destinationControl );                   
    this.dma0.destinationShadow    = structuredClone(IOCore.dmaChannel0.destinationShadow  );                 
    this.dma0.dmaType              = structuredClone(IOCore.dmaChannel0.dmaType            );        
    this.dma0.enabled              = structuredClone(IOCore.dmaChannel0.enabled            );         
    this.dma0.irqFlagging          = structuredClone(IOCore.dmaChannel0.irqFlagging        );     
    this.dma0.is32Bit              = structuredClone(IOCore.dmaChannel0.is32Bit            );         
    this.dma0.pending              = structuredClone(IOCore.dmaChannel0.pending            );          
    this.dma0.repeat               = structuredClone(IOCore.dmaChannel0.repeat             );       
    this.dma0.source               = structuredClone(IOCore.dmaChannel0.source             );      
    this.dma0.sourceControl        = structuredClone(IOCore.dmaChannel0.sourceControl      );         
    this.dma0.sourceShadow         = structuredClone(IOCore.dmaChannel0.sourceShadow       );       
    this.dma0.wordCount            = structuredClone(IOCore.dmaChannel0.wordCount          );              
    this.dma0.wordCountShadow      = structuredClone(IOCore.dmaChannel0.wordCountShadow    );
    
    this.dma1 = {}; 
    this.dma1.destination          = structuredClone(IOCore.dmaChannel1.destination        );     
    this.dma1.destinationControl   = structuredClone(IOCore.dmaChannel1.destinationControl );                   
    this.dma1.destinationShadow    = structuredClone(IOCore.dmaChannel1.destinationShadow  );                 
    this.dma1.dmaType              = structuredClone(IOCore.dmaChannel1.dmaType            );        
    this.dma1.enabled              = structuredClone(IOCore.dmaChannel1.enabled            );         
    this.dma1.irqFlagging          = structuredClone(IOCore.dmaChannel1.irqFlagging        );     
    this.dma1.is32Bit              = structuredClone(IOCore.dmaChannel1.is32Bit            );         
    this.dma1.pending              = structuredClone(IOCore.dmaChannel1.pending            );          
    this.dma1.repeat               = structuredClone(IOCore.dmaChannel1.repeat             );       
    this.dma1.source               = structuredClone(IOCore.dmaChannel1.source             );      
    this.dma1.sourceControl        = structuredClone(IOCore.dmaChannel1.sourceControl      );         
    this.dma1.sourceShadow         = structuredClone(IOCore.dmaChannel1.sourceShadow       );       
    this.dma1.wordCount            = structuredClone(IOCore.dmaChannel1.wordCount          );              
    this.dma1.wordCountShadow      = structuredClone(IOCore.dmaChannel1.wordCountShadow    );     

    this.dma2 = {}; 
    this.dma2.destination          = structuredClone(IOCore.dmaChannel2.destination        );     
    this.dma2.destinationControl   = structuredClone(IOCore.dmaChannel2.destinationControl );                   
    this.dma2.destinationShadow    = structuredClone(IOCore.dmaChannel2.destinationShadow  );                 
    this.dma2.dmaType              = structuredClone(IOCore.dmaChannel2.dmaType            );        
    this.dma2.enabled              = structuredClone(IOCore.dmaChannel2.enabled            );         
    this.dma2.irqFlagging          = structuredClone(IOCore.dmaChannel2.irqFlagging        );     
    this.dma2.is32Bit              = structuredClone(IOCore.dmaChannel2.is32Bit            );         
    this.dma2.pending              = structuredClone(IOCore.dmaChannel2.pending            );          
    this.dma2.repeat               = structuredClone(IOCore.dmaChannel2.repeat             );       
    this.dma2.source               = structuredClone(IOCore.dmaChannel2.source             );      
    this.dma2.sourceControl        = structuredClone(IOCore.dmaChannel2.sourceControl      );         
    this.dma2.sourceShadow         = structuredClone(IOCore.dmaChannel2.sourceShadow       );       
    this.dma2.wordCount            = structuredClone(IOCore.dmaChannel2.wordCount          );              
    this.dma2.wordCountShadow      = structuredClone(IOCore.dmaChannel2.wordCountShadow    );

    this.dma3 = {}; 
    this.dma3.destination            =  structuredClone(IOCore.dmaChannel3.destination            );      
    this.dma3.destinationControl     =  structuredClone(IOCore.dmaChannel3.destinationControl     );             
    this.dma3.destinationShadow      =  structuredClone(IOCore.dmaChannel3.destinationShadow      );            
    this.dma3.displaySyncEnableDelay =  structuredClone(IOCore.dmaChannel3.displaySyncEnableDelay );                 
    this.dma3.dmaType                =  structuredClone(IOCore.dmaChannel3.dmaType                );  
    this.dma3.enabled                =  structuredClone(IOCore.dmaChannel3.enabled                );  
    this.dma3.gamePakDMA             =  structuredClone(IOCore.dmaChannel3.gamePakDMA             );     
    this.dma3.irqFlagging            =  structuredClone(IOCore.dmaChannel3.irqFlagging            );      
    this.dma3.is32Bit                =  structuredClone(IOCore.dmaChannel3.is32Bit                );  
    this.dma3.pending                =  structuredClone(IOCore.dmaChannel3.pending                );  
    this.dma3.repeat                 =  structuredClone(IOCore.dmaChannel3.repeat                 ); 
    this.dma3.source                 =  structuredClone(IOCore.dmaChannel3.source                 ); 
    this.dma3.sourceControl          =  structuredClone(IOCore.dmaChannel3.sourceControl          );        
    this.dma3.sourceShadow           =  structuredClone(IOCore.dmaChannel3.sourceShadow           );       
    this.dma3.wordCount              =  structuredClone(IOCore.dmaChannel3.wordCount              );    
    this.dma3.wordCountShadow        =  structuredClone(IOCore.dmaChannel3.wordCountShadow        );          
    
    /* CPU */               
    this.registers                 = structuredClone(IOCore.cpu.registers                );
    this.registersUSR              = structuredClone(IOCore.cpu.registersUSR             );
    this.registersFIQ              = structuredClone(IOCore.cpu.registersFIQ             );
    this.registersSVC              = structuredClone(IOCore.cpu.registersSVC             );
    this.registersABT              = structuredClone(IOCore.cpu.registersABT             );
    this.registersIRQ              = structuredClone(IOCore.cpu.registersIRQ             );
    this.registersUND              = structuredClone(IOCore.cpu.registersUND             );
    this.modeFlags                 = structuredClone(IOCore.cpu.modeFlags                );
    this.SPSR                      = structuredClone(IOCore.cpu.SPSR                     );
    this.mul64ResultHigh           = structuredClone(IOCore.cpu.mul64ResultHigh          );
    this.mul64ResultLow            = structuredClone(IOCore.cpu.mul64ResultLow           );
    this.triggeredIRQ              = structuredClone(IOCore.cpu.triggeredIRQ             );

    this.THUMB = {};
    this.THUMB.decode              = structuredClone(IOCore.THUMB.decode                 );
    this.THUMB.execute             = structuredClone(IOCore.THUMB.execute                );
    this.THUMB.fetch               = structuredClone(IOCore.THUMB.fetch                  );

    this.ARM = {};
    this.ARM.decode                = structuredClone(IOCore.ARM.decode                   );
    this.ARM.execute               = structuredClone(IOCore.ARM.execute                  );
    this.ARM.fetch                 = structuredClone(IOCore.ARM.fetch                    );
         
    /* Timers */         
    this.timer0Counter             = structuredClone(IOCore.timer.timer0Counter          );
    this.timer0Reload              = structuredClone(IOCore.timer.timer0Reload           );
    this.timer0Control             = structuredClone(IOCore.timer.timer0Control          );
    this.timer0Enabled             = structuredClone(IOCore.timer.timer0Enabled          ); 
    this.timer0IRQ                 = structuredClone(IOCore.timer.timer0IRQ              ); 
    this.timer0Precounter          = structuredClone(IOCore.timer.timer0Precounter       );
    this.timer0Prescalar           = structuredClone(IOCore.timer.timer0Prescalar        );
    this.timer0PrescalarShifted    = structuredClone(IOCore.timer.timer0PrescalarShifted );
    this.timer1Counter             = structuredClone(IOCore.timer.timer1Counter          );
    this.timer1Reload              = structuredClone(IOCore.timer.timer1Reload           );
    this.timer1Control             = structuredClone(IOCore.timer.timer1Control          );
    this.timer1Enabled             = structuredClone(IOCore.timer.timer1Enabled          ); 
    this.timer1IRQ                 = structuredClone(IOCore.timer.timer1IRQ              ); 
    this.timer1Precounter          = structuredClone(IOCore.timer.timer1Precounter       );
    this.timer1Prescalar           = structuredClone(IOCore.timer.timer1Prescalar        );
    this.timer1PrescalarShifted    = structuredClone(IOCore.timer.timer1PrescalarShifted );
    this.timer1CountUp             = structuredClone(IOCore.timer.timer1CountUp          ); 
    this.timer2Counter             = structuredClone(IOCore.timer.timer2Counter          );
    this.timer2Reload              = structuredClone(IOCore.timer.timer2Reload           );
    this.timer2Control             = structuredClone(IOCore.timer.timer2Control          );
    this.timer2Enabled             = structuredClone(IOCore.timer.timer2Enabled          ); 
    this.timer2IRQ                 = structuredClone(IOCore.timer.timer2IRQ              ); 
    this.timer2Precounter          = structuredClone(IOCore.timer.timer2Precounter       );
    this.timer2Prescalar           = structuredClone(IOCore.timer.timer2Prescalar        );
    this.timer2PrescalarShifted    = structuredClone(IOCore.timer.timer2PrescalarShifted );
    this.timer2CountUp             = structuredClone(IOCore.timer.timer2CountUp          ); 
    this.timer3Counter             = structuredClone(IOCore.timer.timer3Counter          );
    this.timer3Reload              = structuredClone(IOCore.timer.timer3Reload           );
    this.timer3Control             = structuredClone(IOCore.timer.timer3Control          );
    this.timer3Enabled             = structuredClone(IOCore.timer.timer3Enabled          ); 
    this.timer3IRQ                 = structuredClone(IOCore.timer.timer3IRQ              ); 
    this.timer3Precounter          = structuredClone(IOCore.timer.timer3Precounter       );
    this.timer3Prescalar           = structuredClone(IOCore.timer.timer3Prescalar        );
    this.timer3PrescalarShifted    = structuredClone(IOCore.timer.timer3PrescalarShifted );
    this.timer3CountUp             = structuredClone(IOCore.timer.timer3CountUp          ); 
    this.timer1UseMainClocks       = structuredClone(IOCore.timer.timer1UseMainClocks    ); 
    this.timer1UseChainedClocks    = structuredClone(IOCore.timer.timer1UseChainedClocks ); 
    this.timer2UseMainClocks       = structuredClone(IOCore.timer.timer2UseMainClocks    ); 
    this.timer2UseChainedClocks    = structuredClone(IOCore.timer.timer2UseChainedClocks ); 
    this.timer3UseMainClocks       = structuredClone(IOCore.timer.timer3UseMainClocks    ); 
    this.timer3UseChainedClocks    = structuredClone(IOCore.timer.timer3UseChainedClocks );  
   
    /* Wait */   
    this.WRAMConfiguration         = structuredClone(IOCore.wait.WRAMConfiguration       );  
    this.WRAMWaitState             = structuredClone(IOCore.wait.WRAMWaitState           );      
    this.SRAMWaitState             = structuredClone(IOCore.wait.SRAMWaitState           );      
    this.WAITCNT0                  = structuredClone(IOCore.wait.WAITCNT0                );           
    this.WAITCNT1                  = structuredClone(IOCore.wait.WAITCNT1                );           
    this.POSTBOOT                  = structuredClone(IOCore.wait.POSTBOOT                );           
    this.isRendering               = structuredClone(IOCore.wait.isRendering             );        
    this.isOAMRendering            = structuredClone(IOCore.wait.isOAMRendering          );     
    this.nonSequential             = structuredClone(IOCore.wait.nonSequential           );      
    this.buffer                    = structuredClone(IOCore.wait.buffer                  );             
    this.clocks                    = structuredClone(IOCore.wait.clocks                  );         


    /* Serial */
    this.SIODATA_A                 = structuredClone(IOCore.serial.SIODATA_A                );     
    this.SIODATA_B                 = structuredClone(IOCore.serial.SIODATA_B                );     
    this.SIODATA_C                 = structuredClone(IOCore.serial.SIODATA_C                );     
    this.SIODATA_D                 = structuredClone(IOCore.serial.SIODATA_D                );     
    this.SIOShiftClockExternal     = structuredClone(IOCore.serial.SIOShiftClockExternal    );     
    this.SIOShiftClockDivider      = structuredClone(IOCore.serial.SIOShiftClockDivider     );     
    this.SIOCNT0_DATA              = structuredClone(IOCore.serial.SIOCNT0_DATA             );     
    this.SIOTransferStarted        = structuredClone(IOCore.serial.SIOTransferStarted       );     
    this.SIOMULT_PLAYER_NUMBER     = structuredClone(IOCore.serial.SIOMULT_PLAYER_NUMBER    );     
    this.SIOCOMMERROR              = structuredClone(IOCore.serial.SIOCOMMERROR             );     
    this.SIOBaudRate               = structuredClone(IOCore.serial.SIOBaudRate              );     
    this.SIOCNT_UART_CTS           = structuredClone(IOCore.serial.SIOCNT_UART_CTS          );   
    this.SIOCNT_UART_MISC          = structuredClone(IOCore.serial.SIOCNT_UART_MISC         );     
    this.SIOCNT_UART_FIFO          = structuredClone(IOCore.serial.SIOCNT_UART_FIFO         );     
    this.SIOCNT_IRQ                = structuredClone(IOCore.serial.SIOCNT_IRQ               );     
    this.SIOCNT_MODE               = structuredClone(IOCore.serial.SIOCNT_MODE              );     
    this.SIOCNT_UART_RECV_ENABLE   = structuredClone(IOCore.serial.SIOCNT_UART_RECV_ENABLE  );      
    this.SIOCNT_UART_SEND_ENABLE   = structuredClone(IOCore.serial.SIOCNT_UART_SEND_ENABLE  );      
    this.SIOCNT_UART_PARITY_ENABLE = structuredClone(IOCore.serial.SIOCNT_UART_PARITY_ENABLE);       
    this.SIOCNT_UART_FIFO_ENABLE   = structuredClone(IOCore.serial.SIOCNT_UART_FIFO_ENABLE  );      
    this.SIODATA8                  = structuredClone(IOCore.serial.SIODATA8                 );     
    this.RCNTMode                  = structuredClone(IOCore.serial.RCNTMode                 );     
    this.RCNTIRQ                   = structuredClone(IOCore.serial.RCNTIRQ                  );   
    this.RCNTDataBits              = structuredClone(IOCore.serial.RCNTDataBits             );     
    this.RCNTDataBitFlow           = structuredClone(IOCore.serial.RCNTDataBitFlow          );     
    this.JOYBUS_IRQ                = structuredClone(IOCore.serial.JOYBUS_IRQ               );     
    this.JOYBUS_CNTL_FLAGS         = structuredClone(IOCore.serial.JOYBUS_CNTL_FLAGS        );     
    this.JOYBUS_RECV0              = structuredClone(IOCore.serial.JOYBUS_RECV0             );     
    this.JOYBUS_RECV1              = structuredClone(IOCore.serial.JOYBUS_RECV1             );     
    this.JOYBUS_RECV2              = structuredClone(IOCore.serial.JOYBUS_RECV2             );     
    this.JOYBUS_RECV3              = structuredClone(IOCore.serial.JOYBUS_RECV3             );     
    this.JOYBUS_SEND0              = structuredClone(IOCore.serial.JOYBUS_SEND0             );     
    this.JOYBUS_SEND1              = structuredClone(IOCore.serial.JOYBUS_SEND1             );     
    this.JOYBUS_SEND2              = structuredClone(IOCore.serial.JOYBUS_SEND2             );     
    this.JOYBUS_SEND3              = structuredClone(IOCore.serial.JOYBUS_SEND3             );     
    this.JOYBUS_STAT               = structuredClone(IOCore.serial.JOYBUS_STAT              );     
    this.shiftClocks               = structuredClone(IOCore.serial.shiftClocks              );     
    this.serialBitsShifted         = structuredClone(IOCore.serial.serialBitsShifted        );     

    /* Run Loop */
    this.systemStatus                  = structuredClone(IOCore.systemStatus                );
    this.cyclesToIterate               = structuredClone(IOCore.cyclesToIterate             );
    this.cyclesOveriteratedPreviously  = structuredClone(IOCore.cyclesOveriteratedPreviously);
    this.accumulatedClocks             = structuredClone(IOCore.accumulatedClocks           );
    this.graphicsClocks                = structuredClone(IOCore.graphicsClocks              );
    this.timerClocks                   = structuredClone(IOCore.timerClocks                 );
    this.serialClocks                  = structuredClone(IOCore.serialClocks                );
    this.nextEventClocks               = structuredClone(IOCore.nextEventClocks             );

    /* IRQ */
    this.interruptsEnabled             = structuredClone(IOCore.irq.interruptsEnabled       );
    this.interruptsRequested           = structuredClone(IOCore.irq.interruptsRequested     );
    this.IME                           = structuredClone(IOCore.irq.IME                     );

    /* Video */
    this.renderedScanLine              = structuredClone(IOCore.gfxState.renderedScanLine   );
    this.statusFlags                   = structuredClone(IOCore.gfxState.statusFlags        );
    this.IRQFlags                      = structuredClone(IOCore.gfxState.IRQFlags           );
    this.VCounter                      = structuredClone(IOCore.gfxState.VCounter           );
    this.currentScanLine               = structuredClone(IOCore.gfxState.currentScanLine    );
    this.LCDTicks                      = structuredClone(IOCore.gfxState.LCDTicks           );

    this.IOData8                       = structuredClone(IOCore.gfxRenderer.IOData8         );

    this.renderer = {};
    this.renderer.displayControl                = structuredClone(IOCore.gfxRenderer.renderer.displayControl     ); 
    this.renderer.display                       = structuredClone(IOCore.gfxRenderer.renderer.display            ); 
    this.renderer.greenSwap                     = structuredClone(IOCore.gfxRenderer.renderer.greenSwap          ); 
    this.renderer.WINOutside                    = structuredClone(IOCore.gfxRenderer.renderer.WINOutside         ); 
    this.renderer.paletteRAM                    = structuredClone(IOCore.gfxRenderer.renderer.paletteRAM         ); 
    this.renderer.VRAM                          = structuredClone(IOCore.gfxRenderer.renderer.VRAM               ); 
    this.renderer.buffer                        = structuredClone(IOCore.gfxRenderer.renderer.buffer             ); 
    this.renderer.frameBuffer                   = structuredClone(IOCore.gfxRenderer.renderer.frameBuffer        ); 
    this.renderer.swizzledFrame                 = structuredClone(IOCore.gfxRenderer.renderer.swizzledFrame      ); 
    this.renderer.totalLinesPassed              = structuredClone(IOCore.gfxRenderer.renderer.totalLinesPassed   ); 
    this.renderer.queuedScanLines               = structuredClone(IOCore.gfxRenderer.renderer.queuedScanLines    ); 
    this.renderer.lastUnrenderedLine            = structuredClone(IOCore.gfxRenderer.renderer.lastUnrenderedLine ); 
    this.renderer.backdrop                      = structuredClone(IOCore.gfxRenderer.renderer.backdrop           ); 
    this.renderer.palette256                    = structuredClone(IOCore.gfxRenderer.renderer.palette256         ); 
    this.renderer.paletteOBJ256                 = structuredClone(IOCore.gfxRenderer.renderer.paletteOBJ256      ); 
    this.renderer.palette16                     = structuredClone(IOCore.gfxRenderer.renderer.palette16          ); 
    this.renderer.paletteOBJ16                  = structuredClone(IOCore.gfxRenderer.renderer.paletteOBJ16       );
    
    this.renderer.lineBuffer                    = structuredClone(IOCore.gfxRenderer.renderer.lineBuffer         );

    this.renderer.compositor = {};
    this.renderer.compositor.buffer             = structuredClone(IOCore.gfxRenderer.renderer.compositor.buffer   );   
    this.renderer.compositor.doEffects          = structuredClone(IOCore.gfxRenderer.renderer.compositor.doEffects); 

    this.renderer.bg0Renderer = {};
    this.renderer.bg0Renderer.BGCharacterBaseBlock  =  structuredClone(IOCore.gfxRenderer.renderer.bg0Renderer.BGCharacterBaseBlock    );
    this.renderer.bg0Renderer.BGLayer               =  structuredClone(IOCore.gfxRenderer.renderer.bg0Renderer.BGLayer                 );
    this.renderer.bg0Renderer.BGScreenBaseBlock     =  structuredClone(IOCore.gfxRenderer.renderer.bg0Renderer.BGScreenBaseBlock       );
    this.renderer.bg0Renderer.BGXCoord              =  structuredClone(IOCore.gfxRenderer.renderer.bg0Renderer.BGXCoord                );
    this.renderer.bg0Renderer.BGYCoord              =  structuredClone(IOCore.gfxRenderer.renderer.bg0Renderer.BGYCoord                );
    this.renderer.bg0Renderer.do256                 =  structuredClone(IOCore.gfxRenderer.renderer.bg0Renderer.do256                   );
    this.renderer.bg0Renderer.doMosaic              =  structuredClone(IOCore.gfxRenderer.renderer.bg0Renderer.doMosaic                );
    this.renderer.bg0Renderer.offset                =  structuredClone(IOCore.gfxRenderer.renderer.bg0Renderer.offset                  );
    this.renderer.bg0Renderer.priorityFlag          =  structuredClone(IOCore.gfxRenderer.renderer.bg0Renderer.priorityFlag            );
    this.renderer.bg0Renderer.tileFetched           =  structuredClone(IOCore.gfxRenderer.renderer.bg0Renderer.tileFetched             );
    this.renderer.bg0Renderer.tileMode              =  structuredClone(IOCore.gfxRenderer.renderer.bg0Renderer.tileMode                );

    this.renderer.bg1Renderer = {};
    this.renderer.bg1Renderer.BGCharacterBaseBlock  =  structuredClone(IOCore.gfxRenderer.renderer.bg1Renderer.BGCharacterBaseBlock    );
    this.renderer.bg1Renderer.BGLayer               =  structuredClone(IOCore.gfxRenderer.renderer.bg1Renderer.BGLayer                 );
    this.renderer.bg1Renderer.BGScreenBaseBlock     =  structuredClone(IOCore.gfxRenderer.renderer.bg1Renderer.BGScreenBaseBlock       );
    this.renderer.bg1Renderer.BGXCoord              =  structuredClone(IOCore.gfxRenderer.renderer.bg1Renderer.BGXCoord                );
    this.renderer.bg1Renderer.BGYCoord              =  structuredClone(IOCore.gfxRenderer.renderer.bg1Renderer.BGYCoord                );
    this.renderer.bg1Renderer.do256                 =  structuredClone(IOCore.gfxRenderer.renderer.bg1Renderer.do256                   );
    this.renderer.bg1Renderer.doMosaic              =  structuredClone(IOCore.gfxRenderer.renderer.bg1Renderer.doMosaic                );
    this.renderer.bg1Renderer.offset                =  structuredClone(IOCore.gfxRenderer.renderer.bg1Renderer.offset                  );
    this.renderer.bg1Renderer.priorityFlag          =  structuredClone(IOCore.gfxRenderer.renderer.bg1Renderer.priorityFlag            );
    this.renderer.bg1Renderer.tileFetched           =  structuredClone(IOCore.gfxRenderer.renderer.bg1Renderer.tileFetched             );
    this.renderer.bg1Renderer.tileMode              =  structuredClone(IOCore.gfxRenderer.renderer.bg1Renderer.tileMode                );

    this.renderer.bg2TextRenderer = {};
    this.renderer.bg2TextRenderer.BGCharacterBaseBlock  =  structuredClone(IOCore.gfxRenderer.renderer.bg2TextRenderer.BGCharacterBaseBlock );
    this.renderer.bg2TextRenderer.BGLayer               =  structuredClone(IOCore.gfxRenderer.renderer.bg2TextRenderer.BGLayer              );
    this.renderer.bg2TextRenderer.BGScreenBaseBlock     =  structuredClone(IOCore.gfxRenderer.renderer.bg2TextRenderer.BGScreenBaseBlock    );
    this.renderer.bg2TextRenderer.BGXCoord              =  structuredClone(IOCore.gfxRenderer.renderer.bg2TextRenderer.BGXCoord             );
    this.renderer.bg2TextRenderer.BGYCoord              =  structuredClone(IOCore.gfxRenderer.renderer.bg2TextRenderer.BGYCoord             );
    this.renderer.bg2TextRenderer.do256                 =  structuredClone(IOCore.gfxRenderer.renderer.bg2TextRenderer.do256                );
    this.renderer.bg2TextRenderer.doMosaic              =  structuredClone(IOCore.gfxRenderer.renderer.bg2TextRenderer.doMosaic             );
    this.renderer.bg2TextRenderer.offset                =  structuredClone(IOCore.gfxRenderer.renderer.bg2TextRenderer.offset               );
    this.renderer.bg2TextRenderer.priorityFlag          =  structuredClone(IOCore.gfxRenderer.renderer.bg2TextRenderer.priorityFlag         );
    this.renderer.bg2TextRenderer.tileFetched           =  structuredClone(IOCore.gfxRenderer.renderer.bg2TextRenderer.tileFetched          );
    this.renderer.bg2TextRenderer.tileMode              =  structuredClone(IOCore.gfxRenderer.renderer.bg2TextRenderer.tileMode             );

    this.renderer.bg3TextRenderer = {};
    this.renderer.bg3TextRenderer.BGCharacterBaseBlock  =  structuredClone(IOCore.gfxRenderer.renderer.bg3TextRenderer.BGCharacterBaseBlock );
    this.renderer.bg3TextRenderer.BGLayer               =  structuredClone(IOCore.gfxRenderer.renderer.bg3TextRenderer.BGLayer              );
    this.renderer.bg3TextRenderer.BGScreenBaseBlock     =  structuredClone(IOCore.gfxRenderer.renderer.bg3TextRenderer.BGScreenBaseBlock    );
    this.renderer.bg3TextRenderer.BGXCoord              =  structuredClone(IOCore.gfxRenderer.renderer.bg3TextRenderer.BGXCoord             );
    this.renderer.bg3TextRenderer.BGYCoord              =  structuredClone(IOCore.gfxRenderer.renderer.bg3TextRenderer.BGYCoord             );
    this.renderer.bg3TextRenderer.do256                 =  structuredClone(IOCore.gfxRenderer.renderer.bg3TextRenderer.do256                );
    this.renderer.bg3TextRenderer.doMosaic              =  structuredClone(IOCore.gfxRenderer.renderer.bg3TextRenderer.doMosaic             );
    this.renderer.bg3TextRenderer.offset                =  structuredClone(IOCore.gfxRenderer.renderer.bg3TextRenderer.offset               );
    this.renderer.bg3TextRenderer.priorityFlag          =  structuredClone(IOCore.gfxRenderer.renderer.bg3TextRenderer.priorityFlag         );
    this.renderer.bg3TextRenderer.tileFetched           =  structuredClone(IOCore.gfxRenderer.renderer.bg3TextRenderer.tileFetched          );
    this.renderer.bg3TextRenderer.tileMode              =  structuredClone(IOCore.gfxRenderer.renderer.bg3TextRenderer.tileMode             );

    this.renderer.bgAffineRenderer0 = {};
    this.renderer.bgAffineRenderer0.BGLayer             =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGLayer            );       
    this.renderer.bgAffineRenderer0.BGReferenceX        =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGReferenceX       );            
    this.renderer.bgAffineRenderer0.BGReferenceY        =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGReferenceY       );            
    this.renderer.bgAffineRenderer0.BGdmx               =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGdmx              );     
    this.renderer.bgAffineRenderer0.BGdmy               =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGdmy              );     
    this.renderer.bgAffineRenderer0.BGdx                =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGdx               );    
    this.renderer.bgAffineRenderer0.BGdy                =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGdy               );    
    this.renderer.bgAffineRenderer0.doMosaic            =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer0.doMosaic           );        
    this.renderer.bgAffineRenderer0.offset              =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer0.offset             );      
    this.renderer.bgAffineRenderer0.pb                  =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer0.pb                 );  
    this.renderer.bgAffineRenderer0.pd                  =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer0.pd                 );  
    this.renderer.bgAffineRenderer0.priorityFlag        =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer0.priorityFlag       );   
    
    this.renderer.bgAffineRenderer1 = {};
    this.renderer.bgAffineRenderer1.BGLayer             =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGLayer            );       
    this.renderer.bgAffineRenderer1.BGReferenceX        =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGReferenceX       );            
    this.renderer.bgAffineRenderer1.BGReferenceY        =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGReferenceY       );            
    this.renderer.bgAffineRenderer1.BGdmx               =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGdmx              );     
    this.renderer.bgAffineRenderer1.BGdmy               =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGdmy              );     
    this.renderer.bgAffineRenderer1.BGdx                =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGdx               );    
    this.renderer.bgAffineRenderer1.BGdy                =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGdy               );    
    this.renderer.bgAffineRenderer1.doMosaic            =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer1.doMosaic           );        
    this.renderer.bgAffineRenderer1.offset              =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer1.offset             );      
    this.renderer.bgAffineRenderer1.pb                  =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer1.pb                 );  
    this.renderer.bgAffineRenderer1.pd                  =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer1.pd                 );  
    this.renderer.bgAffineRenderer1.priorityFlag        =  structuredClone(IOCore.gfxRenderer.renderer.bgAffineRenderer1.priorityFlag       );    

    this.renderer.bg2FrameBufferRenderer = {};
    this.renderer.bg2FrameBufferRenderer.frameSelect    =  structuredClone(IOCore.gfxRenderer.renderer.bg2FrameBufferRenderer.frameSelect   );

    this.renderer.bg2MatrixRenderer = {};
    this.renderer.bg2MatrixRenderer.BGCharacterBaseBlock = structuredClone(IOCore.gfxRenderer.renderer.bg2MatrixRenderer.BGCharacterBaseBlock);                
    this.renderer.bg2MatrixRenderer.BGDisplayOverflow    = structuredClone(IOCore.gfxRenderer.renderer.bg2MatrixRenderer.BGDisplayOverflow   );             
    this.renderer.bg2MatrixRenderer.BGScreenBaseBlock    = structuredClone(IOCore.gfxRenderer.renderer.bg2MatrixRenderer.BGScreenBaseBlock   );             
    this.renderer.bg2MatrixRenderer.mapSize              = structuredClone(IOCore.gfxRenderer.renderer.bg2MatrixRenderer.mapSize             );   
    this.renderer.bg2MatrixRenderer.mapSizeComparer      = structuredClone(IOCore.gfxRenderer.renderer.bg2MatrixRenderer.mapSizeComparer     );              

    this.renderer.bg3MatrixRenderer = {};
    this.renderer.bg3MatrixRenderer.BGCharacterBaseBlock = structuredClone(IOCore.gfxRenderer.renderer.bg3MatrixRenderer.BGCharacterBaseBlock);                
    this.renderer.bg3MatrixRenderer.BGDisplayOverflow    = structuredClone(IOCore.gfxRenderer.renderer.bg3MatrixRenderer.BGDisplayOverflow   );             
    this.renderer.bg3MatrixRenderer.BGScreenBaseBlock    = structuredClone(IOCore.gfxRenderer.renderer.bg3MatrixRenderer.BGScreenBaseBlock   );             
    this.renderer.bg3MatrixRenderer.mapSize              = structuredClone(IOCore.gfxRenderer.renderer.bg3MatrixRenderer.mapSize             );   
    this.renderer.bg3MatrixRenderer.mapSizeComparer      = structuredClone(IOCore.gfxRenderer.renderer.bg3MatrixRenderer.mapSizeComparer     );   

    this.renderer.colorEffectsRenderer = {};
    this.renderer.colorEffectsRenderer.alphaBlendAmountTarget1 = structuredClone(IOCore.gfxRenderer.renderer.colorEffectsRenderer.alphaBlendAmountTarget1);
    this.renderer.colorEffectsRenderer.alphaBlendAmountTarget2 = structuredClone(IOCore.gfxRenderer.renderer.colorEffectsRenderer.alphaBlendAmountTarget2);
    this.renderer.colorEffectsRenderer.brightnessEffectAmount  = structuredClone(IOCore.gfxRenderer.renderer.colorEffectsRenderer.brightnessEffectAmount );
    this.renderer.colorEffectsRenderer.colorEffectsType        = structuredClone(IOCore.gfxRenderer.renderer.colorEffectsRenderer.colorEffectsType       );
    this.renderer.colorEffectsRenderer.effectsTarget1          = structuredClone(IOCore.gfxRenderer.renderer.colorEffectsRenderer.effectsTarget1         );
    this.renderer.colorEffectsRenderer.effectsTarget2          = structuredClone(IOCore.gfxRenderer.renderer.colorEffectsRenderer.effectsTarget2         );

    this.renderer.mosaicRenderer = {};
    this.renderer.mosaicRenderer.BGMosaicHSize                 = structuredClone(IOCore.gfxRenderer.renderer.mosaicRenderer.BGMosaicHSize );
    this.renderer.mosaicRenderer.BGMosaicVSize                 = structuredClone(IOCore.gfxRenderer.renderer.mosaicRenderer.BGMosaicVSize );
    this.renderer.mosaicRenderer.OBJMosaicHSize                = structuredClone(IOCore.gfxRenderer.renderer.mosaicRenderer.OBJMosaicHSize);
    this.renderer.mosaicRenderer.OBJMosaicVSize                = structuredClone(IOCore.gfxRenderer.renderer.mosaicRenderer.OBJMosaicVSize);

    this.renderer.objRenderer = {};
    this.renderer.objRenderer.cyclesToRender                   = structuredClone(IOCore.gfxRenderer.renderer.objRenderer.cyclesToRender     );
    this.renderer.objRenderer.OAMRAM                           = structuredClone(IOCore.gfxRenderer.renderer.objRenderer.OAMRAM             );
    this.renderer.objRenderer.scratchBuffer                    = structuredClone(IOCore.gfxRenderer.renderer.objRenderer.scratchBuffer      );
    this.renderer.objRenderer.scratchWindowBuffer              = structuredClone(IOCore.gfxRenderer.renderer.objRenderer.scratchWindowBuffer);
    this.renderer.objRenderer.scratchOBJBuffer                 = structuredClone(IOCore.gfxRenderer.renderer.objRenderer.scratchOBJBuffer   );
    this.renderer.objRenderer.OBJMatrixParameters              = structuredClone(IOCore.gfxRenderer.renderer.objRenderer.OBJMatrixParameters);

    this.renderer.objWindowRenderer = {};
    this.renderer.objWindowRenderer.WINOBJOutside              = structuredClone(IOCore.gfxRenderer.renderer.objWindowRenderer.WINOBJOutside);

    this.renderer.window0Renderer = {};
    this.renderer.window0Renderer.WINXCoordLeft                = structuredClone(IOCore.gfxRenderer.renderer.window0Renderer.WINXCoordLeft       );
    this.renderer.window0Renderer.WINXCoordRight               = structuredClone(IOCore.gfxRenderer.renderer.window0Renderer.WINXCoordRight      );
    this.renderer.window0Renderer.WINYCoordBottom              = structuredClone(IOCore.gfxRenderer.renderer.window0Renderer.WINYCoordBottom     );
    this.renderer.window0Renderer.WINYCoordTop                 = structuredClone(IOCore.gfxRenderer.renderer.window0Renderer.WINYCoordTop        );
    this.renderer.window0Renderer.windowDisplayControl         = structuredClone(IOCore.gfxRenderer.renderer.window0Renderer.windowDisplayControl);

    this.renderer.window1Renderer = {};
    this.renderer.window1Renderer.WINXCoordLeft                = structuredClone(IOCore.gfxRenderer.renderer.window1Renderer.WINXCoordLeft       );
    this.renderer.window1Renderer.WINXCoordRight               = structuredClone(IOCore.gfxRenderer.renderer.window1Renderer.WINXCoordRight      );
    this.renderer.window1Renderer.WINYCoordBottom              = structuredClone(IOCore.gfxRenderer.renderer.window1Renderer.WINYCoordBottom     );
    this.renderer.window1Renderer.WINYCoordTop                 = structuredClone(IOCore.gfxRenderer.renderer.window1Renderer.WINYCoordTop        );
    this.renderer.window1Renderer.windowDisplayControl         = structuredClone(IOCore.gfxRenderer.renderer.window1Renderer.windowDisplayControl);

    /* Audio */
    this.AGBDirectSoundA                    =  structuredClone(IOCore.sound.AGBDirectSoundA                  );
    this.AGBDirectSoundAFolded              =  structuredClone(IOCore.sound.AGBDirectSoundAFolded            );
    this.AGBDirectSoundALeftCanPlay         =  structuredClone(IOCore.sound.AGBDirectSoundALeftCanPlay       );
    this.AGBDirectSoundARightCanPlay        =  structuredClone(IOCore.sound.AGBDirectSoundARightCanPlay      );
    this.AGBDirectSoundAShifter             =  structuredClone(IOCore.sound.AGBDirectSoundAShifter           );
    this.AGBDirectSoundATimer               =  structuredClone(IOCore.sound.AGBDirectSoundATimer             );
    this.AGBDirectSoundB                    =  structuredClone(IOCore.sound.AGBDirectSoundB                  );
    this.AGBDirectSoundBFolded              =  structuredClone(IOCore.sound.AGBDirectSoundBFolded            );
    this.AGBDirectSoundBLeftCanPlay         =  structuredClone(IOCore.sound.AGBDirectSoundBLeftCanPlay       );
    this.AGBDirectSoundBRightCanPlay        =  structuredClone(IOCore.sound.AGBDirectSoundBRightCanPlay      );
    this.AGBDirectSoundBShifter             =  structuredClone(IOCore.sound.AGBDirectSoundBShifter           );
    this.AGBDirectSoundBTimer               =  structuredClone(IOCore.sound.AGBDirectSoundBTimer             );
    this.CGBMixerOutputCacheLeft            =  structuredClone(IOCore.sound.CGBMixerOutputCacheLeft          );
    this.CGBMixerOutputCacheLeftFolded      =  structuredClone(IOCore.sound.CGBMixerOutputCacheLeftFolded    );
    this.CGBMixerOutputCacheRight           =  structuredClone(IOCore.sound.CGBMixerOutputCacheRight         );
    this.CGBMixerOutputCacheRightFolded     =  structuredClone(IOCore.sound.CGBMixerOutputCacheRightFolded   );
    this.CGBOutputRatio                     =  structuredClone(IOCore.sound.CGBOutputRatio                   );
    this.PWMBitDepthMask                    =  structuredClone(IOCore.sound.PWMBitDepthMask                  );
    this.PWMBitDepthMaskShadow              =  structuredClone(IOCore.sound.PWMBitDepthMaskShadow            );
    this.PWMWidth                           =  structuredClone(IOCore.sound.PWMWidth                         );
    this.PWMWidthOld                        =  structuredClone(IOCore.sound.PWMWidthOld                      );
    this.PWMWidthShadow                     =  structuredClone(IOCore.sound.PWMWidthShadow                   );
    this.VinLeftChannelMasterVolume         =  structuredClone(IOCore.sound.VinLeftChannelMasterVolume       );
    this.VinRightChannelMasterVolume        =  structuredClone(IOCore.sound.VinRightChannelMasterVolume      );
    this.audioClocksUntilNextEvent          =  structuredClone(IOCore.sound.audioClocksUntilNextEvent        );
    this.audioClocksUntilNextEventCounter   =  structuredClone(IOCore.sound.audioClocksUntilNextEventCounter );
    this.audioIndex                         =  structuredClone(IOCore.sound.audioIndex                       );
    this.audioResamplerFirstPassFactor      =  structuredClone(IOCore.sound.audioResamplerFirstPassFactor    );
    this.audioTicks                         =  structuredClone(IOCore.sound.audioTicks                       );
    this.downsampleInputLeft                =  structuredClone(IOCore.sound.downsampleInputLeft              );
    this.downsampleInputRight               =  structuredClone(IOCore.sound.downsampleInputRight             );
    this.mixerOutputCacheLeft               =  structuredClone(IOCore.sound.mixerOutputCacheLeft             );
    this.mixerOutputCacheRight              =  structuredClone(IOCore.sound.mixerOutputCacheRight            );
    this.mixerSoundBIAS                     =  structuredClone(IOCore.sound.mixerSoundBIAS                   );
    this.nr50                               =  structuredClone(IOCore.sound.nr50                             );
    this.nr51                               =  structuredClone(IOCore.sound.nr51                             );
    this.nr52                               =  structuredClone(IOCore.sound.nr52                             );
    this.nr60                               =  structuredClone(IOCore.sound.nr60                             );
    this.nr61                               =  structuredClone(IOCore.sound.nr61                             );
    this.nr62                               =  structuredClone(IOCore.sound.nr62                             );
    this.nr63                               =  structuredClone(IOCore.sound.nr63                             );
    this.sequencePosition                   =  structuredClone(IOCore.sound.sequencePosition                 );
    this.sequencerClocks                    =  structuredClone(IOCore.sound.sequencerClocks                  );
    this.soundMasterEnabled                 =  structuredClone(IOCore.sound.soundMasterEnabled               );

    this.channel1 = {}; 
    this.channel1.CachedDuty                = structuredClone(IOCore.sound.channel1.CachedDuty               );      
    this.channel1.DutyTracker               = structuredClone(IOCore.sound.channel1.DutyTracker              );      
    this.channel1.Enabled                   = structuredClone(IOCore.sound.channel1.Enabled                  );      
    this.channel1.FrequencyCounter          = structuredClone(IOCore.sound.channel1.FrequencyCounter         );      
    this.channel1.FrequencyTracker          = structuredClone(IOCore.sound.channel1.FrequencyTracker         );      
    this.channel1.ShadowFrequency           = structuredClone(IOCore.sound.channel1.ShadowFrequency          );      
    this.channel1.SweepFault                = structuredClone(IOCore.sound.channel1.SweepFault               );      
    this.channel1.Swept                     = structuredClone(IOCore.sound.channel1.Swept                    );      
    this.channel1.canPlay                   = structuredClone(IOCore.sound.channel1.canPlay                  );      
    this.channel1.consecutive               = structuredClone(IOCore.sound.channel1.consecutive              );      
    this.channel1.currentSampleLeft         = structuredClone(IOCore.sound.channel1.currentSampleLeft        );      
    this.channel1.currentSampleRight        = structuredClone(IOCore.sound.channel1.currentSampleRight       );      
    this.channel1.decreaseSweep             = structuredClone(IOCore.sound.channel1.decreaseSweep            );      
    this.channel1.envelopeSweeps            = structuredClone(IOCore.sound.channel1.envelopeSweeps           );      
    this.channel1.envelopeSweepsLast        = structuredClone(IOCore.sound.channel1.envelopeSweepsLast       );      
    this.channel1.envelopeType              = structuredClone(IOCore.sound.channel1.envelopeType             );      
    this.channel1.envelopeVolume            = structuredClone(IOCore.sound.channel1.envelopeVolume           );      
    this.channel1.frequency                 = structuredClone(IOCore.sound.channel1.frequency                );      
    this.channel1.frequencySweepDivider     = structuredClone(IOCore.sound.channel1.frequencySweepDivider    );      
    this.channel1.lastTimeSweep             = structuredClone(IOCore.sound.channel1.lastTimeSweep            );      
    this.channel1.leftEnable                = structuredClone(IOCore.sound.channel1.leftEnable               );      
    this.channel1.nr10                      = structuredClone(IOCore.sound.channel1.nr10                     );      
    this.channel1.nr11                      = structuredClone(IOCore.sound.channel1.nr11                     );      
    this.channel1.nr12                      = structuredClone(IOCore.sound.channel1.nr12                     );      
    this.channel1.nr14                      = structuredClone(IOCore.sound.channel1.nr14                     );      
    this.channel1.rightEnable               = structuredClone(IOCore.sound.channel1.rightEnable              );      
    this.channel1.timeSweep                 = structuredClone(IOCore.sound.channel1.timeSweep                );      
    this.channel1.totalLength               = structuredClone(IOCore.sound.channel1.totalLength              );      

    this.channel2 = {};
    this.channel2.CachedDuty                = structuredClone(IOCore.sound.channel2.CachedDuty               );
    this.channel2.DutyTracker               = structuredClone(IOCore.sound.channel2.DutyTracker              );
    this.channel2.Enabled                   = structuredClone(IOCore.sound.channel2.Enabled                  );
    this.channel2.FrequencyCounter          = structuredClone(IOCore.sound.channel2.FrequencyCounter         );
    this.channel2.FrequencyTracker          = structuredClone(IOCore.sound.channel2.FrequencyTracker         );
    this.channel2.ShadowFrequency           = structuredClone(IOCore.sound.channel2.ShadowFrequency          );
    this.channel2.canPlay                   = structuredClone(IOCore.sound.channel2.canPlay                  );
    this.channel2.consecutive               = structuredClone(IOCore.sound.channel2.consecutive              );
    this.channel2.currentSampleLeft         = structuredClone(IOCore.sound.channel2.currentSampleLeft        );
    this.channel2.currentSampleRight        = structuredClone(IOCore.sound.channel2.currentSampleRight       );
    this.channel2.envelopeSweeps            = structuredClone(IOCore.sound.channel2.envelopeSweeps           );
    this.channel2.envelopeSweepsLast        = structuredClone(IOCore.sound.channel2.envelopeSweepsLast       );
    this.channel2.envelopeType              = structuredClone(IOCore.sound.channel2.envelopeType             );
    this.channel2.envelopeVolume            = structuredClone(IOCore.sound.channel2.envelopeVolume           );
    this.channel2.frequency                 = structuredClone(IOCore.sound.channel2.frequency                );
    this.channel2.leftEnable                = structuredClone(IOCore.sound.channel2.leftEnable               );
    this.channel2.nr21                      = structuredClone(IOCore.sound.channel2.nr21                     );
    this.channel2.nr22                      = structuredClone(IOCore.sound.channel2.nr22                     );
    this.channel2.nr23                      = structuredClone(IOCore.sound.channel2.nr23                     );
    this.channel2.nr24                      = structuredClone(IOCore.sound.channel2.nr24                     );
    this.channel2.rightEnable               = structuredClone(IOCore.sound.channel2.rightEnable              );
    this.channel2.totalLength               = structuredClone(IOCore.sound.channel2.totalLength              );

    this.channel3 = {};
    this.channel3.Enabled                   = structuredClone(IOCore.sound.channel3.Enabled                  );         
    this.channel3.FrequencyPeriod           = structuredClone(IOCore.sound.channel3.FrequencyPeriod          );                 
    this.channel3.PCM                       = structuredClone(IOCore.sound.channel3.PCM                      );     
    this.channel3.WAVERAM8                  = structuredClone(IOCore.sound.channel3.WAVERAM8                 );          
    this.channel3.WAVERAMBankAccessed       = structuredClone(IOCore.sound.channel3.WAVERAMBankAccessed      );                     
    this.channel3.WAVERAMBankSpecified      = structuredClone(IOCore.sound.channel3.WAVERAMBankSpecified     );                      
    this.channel3.WaveRAMBankSize           = structuredClone(IOCore.sound.channel3.WaveRAMBankSize          );                 
    this.channel3.cachedSample              = structuredClone(IOCore.sound.channel3.cachedSample             );              
    this.channel3.canPlay                   = structuredClone(IOCore.sound.channel3.canPlay                  );         
    this.channel3.consecutive               = structuredClone(IOCore.sound.channel3.consecutive              );             
    this.channel3.counter                   = structuredClone(IOCore.sound.channel3.counter                  );         
    this.channel3.currentSampleLeft         = structuredClone(IOCore.sound.channel3.currentSampleLeft        );                   
    this.channel3.currentSampleRight        = structuredClone(IOCore.sound.channel3.currentSampleRight       );                    
    this.channel3.frequency                 = structuredClone(IOCore.sound.channel3.frequency                );           
    this.channel3.lastSampleLookup          = structuredClone(IOCore.sound.channel3.lastSampleLookup         );                  
    this.channel3.leftEnable                = structuredClone(IOCore.sound.channel3.leftEnable               );            
    this.channel3.nr30                      = structuredClone(IOCore.sound.channel3.nr30                     );      
    this.channel3.nr31                      = structuredClone(IOCore.sound.channel3.nr31                     );      
    this.channel3.nr32                      = structuredClone(IOCore.sound.channel3.nr32                     );      
    this.channel3.nr33                      = structuredClone(IOCore.sound.channel3.nr33                     );      
    this.channel3.nr34                      = structuredClone(IOCore.sound.channel3.nr34                     );      
    this.channel3.patternType               = structuredClone(IOCore.sound.channel3.patternType              );             
    this.channel3.rightEnable               = structuredClone(IOCore.sound.channel3.rightEnable              );                 
    this.channel3.totalLength               = structuredClone(IOCore.sound.channel3.totalLength              );          

    // LSFR7Table
    // LSFR15Table
    this.channel4 = {};
    this.channel4.BitRange                  = structuredClone(IOCore.sound.channel4.BitRange                 );
    this.channel4.Enabled                   = structuredClone(IOCore.sound.channel4.Enabled                  );
    this.channel4.FrequencyPeriod           = structuredClone(IOCore.sound.channel4.FrequencyPeriod          );
    this.channel4.VolumeShifter             = structuredClone(IOCore.sound.channel4.VolumeShifter            );
    this.channel4.cachedSample              = structuredClone(IOCore.sound.channel4.cachedSample             );
    this.channel4.canPlay                   = structuredClone(IOCore.sound.channel4.canPlay                  );
    this.channel4.consecutive               = structuredClone(IOCore.sound.channel4.consecutive              );
    this.channel4.counter                   = structuredClone(IOCore.sound.channel4.counter                  );
    this.channel4.currentSampleLeft         = structuredClone(IOCore.sound.channel4.currentSampleLeft        );
    this.channel4.currentSampleRight        = structuredClone(IOCore.sound.channel4.currentSampleRight       );
    this.channel4.currentVolume             = structuredClone(IOCore.sound.channel4.currentVolume            );
    this.channel4.envelopeSweeps            = structuredClone(IOCore.sound.channel4.envelopeSweeps           );
    this.channel4.envelopeSweepsLast        = structuredClone(IOCore.sound.channel4.envelopeSweepsLast       );
    this.channel4.envelopeType              = structuredClone(IOCore.sound.channel4.envelopeType             );
    this.channel4.envelopeVolume            = structuredClone(IOCore.sound.channel4.envelopeVolume           );
    this.channel4.lastSampleLookup          = structuredClone(IOCore.sound.channel4.lastSampleLookup         );
    this.channel4.leftEnable                = structuredClone(IOCore.sound.channel4.leftEnable               );
    this.channel4.noiseSampleTable          = structuredClone(IOCore.sound.channel4.noiseSampleTable         );
    this.channel4.nr42                      = structuredClone(IOCore.sound.channel4.nr42                     );
    this.channel4.nr43                      = structuredClone(IOCore.sound.channel4.nr43                     );
    this.channel4.nr44                      = structuredClone(IOCore.sound.channel4.nr44                     );
    this.channel4.rightEnable               = structuredClone(IOCore.sound.channel4.rightEnable              );
    this.channel4.totalLength               = structuredClone(IOCore.sound.channel4.totalLength              );

    this.FIFOA = {};
    this.FIFOA.buffer                       = structuredClone(IOCore.sound.FIFOABuffer.buffer                );   
    this.FIFOA.count                        = structuredClone(IOCore.sound.FIFOABuffer.count                 );   
    this.FIFOA.position                     = structuredClone(IOCore.sound.FIFOABuffer.position              );    

    this.FIFOB = {};
    this.FIFOB.buffer                       = structuredClone(IOCore.sound.FIFOBBuffer.buffer                );   
    this.FIFOB.count                        = structuredClone(IOCore.sound.FIFOBBuffer.count                 );   
    this.FIFOB.position                     = structuredClone(IOCore.sound.FIFOBBuffer.position              );    

    /* Serial */
    this.JOYBUS_CNTL_FLAGS             = structuredClone(IOCore.serial.JOYBUS_CNTL_FLAGS         );
    this.JOYBUS_IRQ                    = structuredClone(IOCore.serial.JOYBUS_IRQ                );
    this.JOYBUS_RECV0                  = structuredClone(IOCore.serial.JOYBUS_RECV0              );
    this.JOYBUS_RECV1                  = structuredClone(IOCore.serial.JOYBUS_RECV1              );
    this.JOYBUS_RECV2                  = structuredClone(IOCore.serial.JOYBUS_RECV2              );
    this.JOYBUS_RECV3                  = structuredClone(IOCore.serial.JOYBUS_RECV3              );
    this.JOYBUS_SEND0                  = structuredClone(IOCore.serial.JOYBUS_SEND0              );
    this.JOYBUS_SEND1                  = structuredClone(IOCore.serial.JOYBUS_SEND1              );
    this.JOYBUS_SEND2                  = structuredClone(IOCore.serial.JOYBUS_SEND2              );
    this.JOYBUS_SEND3                  = structuredClone(IOCore.serial.JOYBUS_SEND3              );
    this.JOYBUS_STAT                   = structuredClone(IOCore.serial.JOYBUS_STAT               );
    this.RCNTDataBitFlow               = structuredClone(IOCore.serial.RCNTDataBitFlow           );
    this.RCNTDataBits                  = structuredClone(IOCore.serial.RCNTDataBits              );
    this.RCNTIRQ                       = structuredClone(IOCore.serial.RCNTIRQ                   );
    this.RCNTMode                      = structuredClone(IOCore.serial.RCNTMode                  );
    this.SIOBaudRate                   = structuredClone(IOCore.serial.SIOBaudRate               );
    this.SIOCNT0_DATA                  = structuredClone(IOCore.serial.SIOCNT0_DATA              );
    this.SIOCNT_IRQ                    = structuredClone(IOCore.serial.SIOCNT_IRQ                );
    this.SIOCNT_MODE                   = structuredClone(IOCore.serial.SIOCNT_MODE               );
    this.SIOCNT_UART_CTS               = structuredClone(IOCore.serial.SIOCNT_UART_CTS           );
    this.SIOCNT_UART_FIFO              = structuredClone(IOCore.serial.SIOCNT_UART_FIFO          );
    this.SIOCNT_UART_FIFO_ENABLE       = structuredClone(IOCore.serial.SIOCNT_UART_FIFO_ENABLE   );
    this.SIOCNT_UART_MISC              = structuredClone(IOCore.serial.SIOCNT_UART_MISC          );
    this.SIOCNT_UART_PARITY_ENABLE     = structuredClone(IOCore.serial.SIOCNT_UART_PARITY_ENABLE );
    this.SIOCNT_UART_RECV_ENABLE       = structuredClone(IOCore.serial.SIOCNT_UART_RECV_ENABLE   );
    this.SIOCNT_UART_SEND_ENABLE       = structuredClone(IOCore.serial.SIOCNT_UART_SEND_ENABLE   );
    this.SIOCOMMERROR                  = structuredClone(IOCore.serial.SIOCOMMERROR              );
    this.SIODATA8                      = structuredClone(IOCore.serial.SIODATA8                  );
    this.SIODATA_A                     = structuredClone(IOCore.serial.SIODATA_A                 );
    this.SIODATA_B                     = structuredClone(IOCore.serial.SIODATA_B                 );
    this.SIODATA_C                     = structuredClone(IOCore.serial.SIODATA_C                 );
    this.SIODATA_D                     = structuredClone(IOCore.serial.SIODATA_D                 );
    this.SIOMULT_PLAYER_NUMBER         = structuredClone(IOCore.serial.SIOMULT_PLAYER_NUMBER     );
    this.SIOShiftClockDivider          = structuredClone(IOCore.serial.SIOShiftClockDivider      );
    this.SIOShiftClockExternal         = structuredClone(IOCore.serial.SIOShiftClockExternal     );
    this.SIOTransferStarted            = structuredClone(IOCore.serial.SIOTransferStarted        );
    this.serialBitsShifted             = structuredClone(IOCore.serial.serialBitsShifted         );
    this.shiftClocks                   = structuredClone(IOCore.serial.shiftClocks               );

    /* Save Data */
    this.saveType               = structuredClone(IOCore.saves.saveType         );
    // TODO: switch reference to saveType?

    this.GPIOChip = {};
    this.GPIOChip.data          = structuredClone(IOCore.saves.GPIOChip.data     );      
    this.GPIOChip.direction     = structuredClone(IOCore.saves.GPIOChip.direction);           
    this.GPIOChip.readWrite     = structuredClone(IOCore.saves.GPIOChip.readWrite);           
    this.GPIOChip.type          = structuredClone(IOCore.saves.GPIOChip.type     );   
    
    this.GPIOChip.RTC = {};
    this.GPIOChip.RTC.pins           = structuredClone(IOCore.saves.GPIOChip.rtc.pins          );
    this.GPIOChip.RTC.direction      = structuredClone(IOCore.saves.GPIOChip.rtc.direction     );
    this.GPIOChip.RTC.totalBytes     = structuredClone(IOCore.saves.GPIOChip.rtc.totalBytes    );
    this.GPIOChip.RTC.bytesRemaining = structuredClone(IOCore.saves.GPIOChip.rtc.bytesRemaining);
    this.GPIOChip.RTC.transferStep   = structuredClone(IOCore.saves.GPIOChip.rtc.transferStep  );
    this.GPIOChip.RTC.reading        = structuredClone(IOCore.saves.GPIOChip.rtc.reading       );
    this.GPIOChip.RTC.bitsRead       = structuredClone(IOCore.saves.GPIOChip.rtc.bitsRead      );
    this.GPIOChip.RTC.bits           = structuredClone(IOCore.saves.GPIOChip.rtc.bits          );
    this.GPIOChip.RTC.command        = structuredClone(IOCore.saves.GPIOChip.rtc.command       );
    this.GPIOChip.RTC.control        = structuredClone(IOCore.saves.GPIOChip.rtc.control       );
    this.GPIOChip.RTC.time           = structuredClone(IOCore.saves.GPIOChip.rtc.time          );

    this.UNDETERMINED = {};
    this.UNDETERMINED.saves        = structuredClone(IOCore.saves.UNDETERMINED.saves   );
    this.UNDETERMINED.possible     = structuredClone(IOCore.saves.UNDETERMINED.possible);

    this.SRAMChip = {};
    this.SRAMChip.TILTChip         = structuredClone(IOCore.saves.SRAMChip.TILTChip        );
    this.SRAMChip.TILTChipUnlocked = structuredClone(IOCore.saves.SRAMChip.TILTChipUnlocked);
    this.SRAMChip.saves            = structuredClone(IOCore.saves.SRAMChip.saves           );

    this.FLASHChip = {};
    this.FLASHChip.BANKOffset              = structuredClone(IOCore.saves.FLASHChip.BANKOffset             );    
    this.FLASHChip.flashCommand            = structuredClone(IOCore.saves.FLASHChip.flashCommand           );    
    this.FLASHChip.flashCommandUnlockStage = structuredClone(IOCore.saves.FLASHChip.flashCommandUnlockStage);    
    this.FLASHChip.largestSizePossible     = structuredClone(IOCore.saves.FLASHChip.largestSizePossible    );    
    this.FLASHChip.notATMEL                = structuredClone(IOCore.saves.FLASHChip.notATMEL               );    
    this.FLASHChip.saves                   = structuredClone(IOCore.saves.FLASHChip.saves                  );         
    this.FLASHChip.writeBytesLeft          = structuredClone(IOCore.saves.FLASHChip.writeBytesLeft         );    

    this.EEPROMChip = {};
    this.EEPROMChip.address             = structuredClone(IOCore.saves.EEPROMChip.address            );    
    this.EEPROMChip.bitsProcessed       = structuredClone(IOCore.saves.EEPROMChip.bitsProcessed      );          
    this.EEPROMChip.buffer              = structuredClone(IOCore.saves.EEPROMChip.buffer             );   
    this.EEPROMChip.largestSizePossible = structuredClone(IOCore.saves.EEPROMChip.largestSizePossible);                
    this.EEPROMChip.mode                = structuredClone(IOCore.saves.EEPROMChip.mode               ); 
    this.EEPROMChip.saves               = structuredClone(IOCore.saves.EEPROMChip.saves              );  
    } else {
        this.accumulatedClocks             = arg.accumulatedClocks            
        this.cyclesOveriteratedPreviously  = arg.cyclesOveriteratedPreviously 
        this.cyclesToIterate               = arg.cyclesToIterate              
        this.graphicsClocks                = arg.graphicsClocks               
        this.nextEventClocks               = arg.nextEventClocks              
        this.systemStatus                  = arg.systemStatus                 
        this.timerClocks                   = arg.timerClocks                  
    
        /* Memory */
        this.internalRAM                = arg.internalRAM               
        this.externalRAM                = arg.externalRAM               
        this.WRAMControlFlags           = arg.WRAMControlFlags          
        this.lastBIOSREAD               = arg.lastBIOSREAD              
      
        /* DMA */
        this.dma = {};  
        this.dma.currentMatch           = arg.dma.currentMatch          
        this.dma.fetch                  = arg.dma.fetch                 
    
        this.dma0 = {}; 
        this.dma0.destination           = arg.dma0.destination          
        this.dma0.destinationControl    = arg.dma0.destinationControl   
        this.dma0.destinationShadow     = arg.dma0.destinationShadow    
        this.dma0.dmaType               = arg.dma0.dmaType              
        this.dma0.enabled               = arg.dma0.enabled              
        this.dma0.irqFlagging           = arg.dma0.irqFlagging          
        this.dma0.is32Bit               = arg.dma0.is32Bit              
        this.dma0.pending               = arg.dma0.pending              
        this.dma0.repeat                = arg.dma0.repeat               
        this.dma0.source                = arg.dma0.source               
        this.dma0.sourceControl         = arg.dma0.sourceControl        
        this.dma0.sourceShadow          = arg.dma0.sourceShadow         
        this.dma0.wordCount             = arg.dma0.wordCount            
        this.dma0.wordCountShadow       = arg.dma0.wordCountShadow      
        
        this.dma1 = {}; 
        this.dma1.destination           = arg.dma1.destination          
        this.dma1.destinationControl    = arg.dma1.destinationControl   
        this.dma1.destinationShadow     = arg.dma1.destinationShadow    
        this.dma1.dmaType               = arg.dma1.dmaType              
        this.dma1.enabled               = arg.dma1.enabled              
        this.dma1.irqFlagging           = arg.dma1.irqFlagging          
        this.dma1.is32Bit               = arg.dma1.is32Bit              
        this.dma1.pending               = arg.dma1.pending              
        this.dma1.repeat                = arg.dma1.repeat               
        this.dma1.source                = arg.dma1.source               
        this.dma1.sourceControl         = arg.dma1.sourceControl        
        this.dma1.sourceShadow          = arg.dma1.sourceShadow         
        this.dma1.wordCount             = arg.dma1.wordCount            
        this.dma1.wordCountShadow       = arg.dma1.wordCountShadow      
    
        this.dma2 = {}; 
        this.dma2.destination           = arg.dma2.destination          
        this.dma2.destinationControl    = arg.dma2.destinationControl   
        this.dma2.destinationShadow     = arg.dma2.destinationShadow    
        this.dma2.dmaType               = arg.dma2.dmaType              
        this.dma2.enabled               = arg.dma2.enabled              
        this.dma2.irqFlagging           = arg.dma2.irqFlagging          
        this.dma2.is32Bit               = arg.dma2.is32Bit              
        this.dma2.pending               = arg.dma2.pending              
        this.dma2.repeat                = arg.dma2.repeat               
        this.dma2.source                = arg.dma2.source               
        this.dma2.sourceControl         = arg.dma2.sourceControl        
        this.dma2.sourceShadow          = arg.dma2.sourceShadow         
        this.dma2.wordCount             = arg.dma2.wordCount            
        this.dma2.wordCountShadow       = arg.dma2.wordCountShadow      
    
        this.dma3 = {}; 
        this.dma3.destination             = arg.dma3.destination            
        this.dma3.destinationControl      = arg.dma3.destinationControl     
        this.dma3.destinationShadow       = arg.dma3.destinationShadow      
        this.dma3.displaySyncEnableDelay  = arg.dma3.displaySyncEnableDelay 
        this.dma3.dmaType                 = arg.dma3.dmaType                
        this.dma3.enabled                 = arg.dma3.enabled                
        this.dma3.gamePakDMA              = arg.dma3.gamePakDMA             
        this.dma3.irqFlagging             = arg.dma3.irqFlagging            
        this.dma3.is32Bit                 = arg.dma3.is32Bit                
        this.dma3.pending                 = arg.dma3.pending                
        this.dma3.repeat                  = arg.dma3.repeat                 
        this.dma3.source                  = arg.dma3.source                 
        this.dma3.sourceControl           = arg.dma3.sourceControl          
        this.dma3.sourceShadow            = arg.dma3.sourceShadow           
        this.dma3.wordCount               = arg.dma3.wordCount              
        this.dma3.wordCountShadow         = arg.dma3.wordCountShadow        
        
        /* CPU */               
        this.registers                  = arg.registers                 
        this.registersUSR               = arg.registersUSR              
        this.registersFIQ               = arg.registersFIQ              
        this.registersSVC               = arg.registersSVC              
        this.registersABT               = arg.registersABT              
        this.registersIRQ               = arg.registersIRQ              
        this.registersUND               = arg.registersUND              
        this.modeFlags                  = arg.modeFlags                 
        this.SPSR                       = arg.SPSR                      
        this.mul64ResultHigh            = arg.mul64ResultHigh           
        this.mul64ResultLow             = arg.mul64ResultLow            
        this.triggeredIRQ               = arg.triggeredIRQ              
    
        this.THUMB = {};
        this.THUMB.decode               = arg.THUMB.decode              
        this.THUMB.execute              = arg.THUMB.execute             
        this.THUMB.fetch                = arg.THUMB.fetch               
    
        this.ARM = {};
        this.ARM.decode                 = arg.ARM.decode                
        this.ARM.execute                = arg.ARM.execute               
        this.ARM.fetch                  = arg.ARM.fetch                 
             
        /* Timers */         
        this.timer0Counter              = arg.timer0Counter             
        this.timer0Reload               = arg.timer0Reload              
        this.timer0Control              = arg.timer0Control             
        this.timer0Enabled              = arg.timer0Enabled             
        this.timer0IRQ                  = arg.timer0IRQ                 
        this.timer0Precounter           = arg.timer0Precounter          
        this.timer0Prescalar            = arg.timer0Prescalar           
        this.timer0PrescalarShifted     = arg.timer0PrescalarShifted    
        this.timer1Counter              = arg.timer1Counter             
        this.timer1Reload               = arg.timer1Reload              
        this.timer1Control              = arg.timer1Control             
        this.timer1Enabled              = arg.timer1Enabled             
        this.timer1IRQ                  = arg.timer1IRQ                 
        this.timer1Precounter           = arg.timer1Precounter          
        this.timer1Prescalar            = arg.timer1Prescalar           
        this.timer1PrescalarShifted     = arg.timer1PrescalarShifted    
        this.timer1CountUp              = arg.timer1CountUp             
        this.timer2Counter              = arg.timer2Counter             
        this.timer2Reload               = arg.timer2Reload              
        this.timer2Control              = arg.timer2Control             
        this.timer2Enabled              = arg.timer2Enabled             
        this.timer2IRQ                  = arg.timer2IRQ                 
        this.timer2Precounter           = arg.timer2Precounter          
        this.timer2Prescalar            = arg.timer2Prescalar           
        this.timer2PrescalarShifted     = arg.timer2PrescalarShifted    
        this.timer2CountUp              = arg.timer2CountUp             
        this.timer3Counter              = arg.timer3Counter             
        this.timer3Reload               = arg.timer3Reload              
        this.timer3Control              = arg.timer3Control             
        this.timer3Enabled              = arg.timer3Enabled             
        this.timer3IRQ                  = arg.timer3IRQ                 
        this.timer3Precounter           = arg.timer3Precounter          
        this.timer3Prescalar            = arg.timer3Prescalar           
        this.timer3PrescalarShifted     = arg.timer3PrescalarShifted    
        this.timer3CountUp              = arg.timer3CountUp             
        this.timer1UseMainClocks        = arg.timer1UseMainClocks       
        this.timer1UseChainedClocks     = arg.timer1UseChainedClocks    
        this.timer2UseMainClocks        = arg.timer2UseMainClocks       
        this.timer2UseChainedClocks     = arg.timer2UseChainedClocks    
        this.timer3UseMainClocks        = arg.timer3UseMainClocks       
        this.timer3UseChainedClocks     = arg.timer3UseChainedClocks    
       
        /* Wait */   
        this.WRAMConfiguration          = arg.WRAMConfiguration         
        this.WRAMWaitState              = arg.WRAMWaitState             
        this.SRAMWaitState              = arg.SRAMWaitState             
        this.WAITCNT0                   = arg.WAITCNT0                  
        this.WAITCNT1                   = arg.WAITCNT1                  
        this.POSTBOOT                   = arg.POSTBOOT                  
        this.isRendering                = arg.isRendering               
        this.isOAMRendering             = arg.isOAMRendering            
        this.nonSequential              = arg.nonSequential             
        this.buffer                     = arg.buffer                    
        this.clocks                     = arg.clocks                    
    
    
        /* Serial */
        this.SIODATA_A                  = arg.SIODATA_A                 
        this.SIODATA_B                  = arg.SIODATA_B                 
        this.SIODATA_C                  = arg.SIODATA_C                 
        this.SIODATA_D                  = arg.SIODATA_D                 
        this.SIOShiftClockExternal      = arg.SIOShiftClockExternal     
        this.SIOShiftClockDivider       = arg.SIOShiftClockDivider      
        this.SIOCNT0_DATA               = arg.SIOCNT0_DATA              
        this.SIOTransferStarted         = arg.SIOTransferStarted        
        this.SIOMULT_PLAYER_NUMBER      = arg.SIOMULT_PLAYER_NUMBER     
        this.SIOCOMMERROR               = arg.SIOCOMMERROR              
        this.SIOBaudRate                = arg.SIOBaudRate               
        this.SIOCNT_UART_CTS            = arg.SIOCNT_UART_CTS           
        this.SIOCNT_UART_MISC           = arg.SIOCNT_UART_MISC          
        this.SIOCNT_UART_FIFO           = arg.SIOCNT_UART_FIFO          
        this.SIOCNT_IRQ                 = arg.SIOCNT_IRQ                
        this.SIOCNT_MODE                = arg.SIOCNT_MODE               
        this.SIOCNT_UART_RECV_ENABLE    = arg.SIOCNT_UART_RECV_ENABLE   
        this.SIOCNT_UART_SEND_ENABLE    = arg.SIOCNT_UART_SEND_ENABLE   
        this.SIOCNT_UART_PARITY_ENABLE  = arg.SIOCNT_UART_PARITY_ENABLE 
        this.SIOCNT_UART_FIFO_ENABLE    = arg.SIOCNT_UART_FIFO_ENABLE   
        this.SIODATA8                   = arg.SIODATA8                  
        this.RCNTMode                   = arg.RCNTMode                  
        this.RCNTIRQ                    = arg.RCNTIRQ                   
        this.RCNTDataBits               = arg.RCNTDataBits              
        this.RCNTDataBitFlow            = arg.RCNTDataBitFlow           
        this.JOYBUS_IRQ                 = arg.JOYBUS_IRQ                
        this.JOYBUS_CNTL_FLAGS          = arg.JOYBUS_CNTL_FLAGS         
        this.JOYBUS_RECV0               = arg.JOYBUS_RECV0              
        this.JOYBUS_RECV1               = arg.JOYBUS_RECV1              
        this.JOYBUS_RECV2               = arg.JOYBUS_RECV2              
        this.JOYBUS_RECV3               = arg.JOYBUS_RECV3              
        this.JOYBUS_SEND0               = arg.JOYBUS_SEND0              
        this.JOYBUS_SEND1               = arg.JOYBUS_SEND1              
        this.JOYBUS_SEND2               = arg.JOYBUS_SEND2              
        this.JOYBUS_SEND3               = arg.JOYBUS_SEND3              
        this.JOYBUS_STAT                = arg.JOYBUS_STAT               
        this.shiftClocks                = arg.shiftClocks               
        this.serialBitsShifted          = arg.serialBitsShifted         
    
        /* Run Loop */
        this.systemStatus                   = arg.systemStatus                  
        this.cyclesToIterate                = arg.cyclesToIterate               
        this.cyclesOveriteratedPreviously   = arg.cyclesOveriteratedPreviously  
        this.accumulatedClocks              = arg.accumulatedClocks             
        this.graphicsClocks                 = arg.graphicsClocks                
        this.timerClocks                    = arg.timerClocks                   
        this.serialClocks                   = arg.serialClocks                  
        this.nextEventClocks                = arg.nextEventClocks               
    
        /* IRQ */
        this.interruptsEnabled              = arg.interruptsEnabled             
        this.interruptsRequested            = arg.interruptsRequested           
        this.IME                            = arg.IME                           
    
        /* Video */
        this.renderedScanLine               = arg.renderedScanLine              
        this.statusFlags                    = arg.statusFlags                   
        this.IRQFlags                       = arg.IRQFlags                      
        this.VCounter                       = arg.VCounter                      
        this.currentScanLine                = arg.currentScanLine               
        this.LCDTicks                       = arg.LCDTicks                      
    
        this.IOData8                        = arg.IOData8                       
    
        this.renderer = {};
        this.renderer.displayControl                 = arg.renderer.displayControl                
        this.renderer.display                        = arg.renderer.display                       
        this.renderer.greenSwap                      = arg.renderer.greenSwap                     
        this.renderer.WINOutside                     = arg.renderer.WINOutside                    
        this.renderer.paletteRAM                     = arg.renderer.paletteRAM                    
        this.renderer.VRAM                           = arg.renderer.VRAM                          
        this.renderer.buffer                         = arg.renderer.buffer                        
        this.renderer.frameBuffer                    = arg.renderer.frameBuffer                   
        this.renderer.swizzledFrame                  = arg.renderer.swizzledFrame                 
        this.renderer.totalLinesPassed               = arg.renderer.totalLinesPassed              
        this.renderer.queuedScanLines                = arg.renderer.queuedScanLines               
        this.renderer.lastUnrenderedLine             = arg.renderer.lastUnrenderedLine            
        this.renderer.backdrop                       = arg.renderer.backdrop                      
        this.renderer.palette256                     = arg.renderer.palette256                    
        this.renderer.paletteOBJ256                  = arg.renderer.paletteOBJ256                 
        this.renderer.palette16                      = arg.renderer.palette16                     
        this.renderer.paletteOBJ16                   = arg.renderer.paletteOBJ16                  
        
        this.renderer.lineBuffer                     = arg.renderer.lineBuffer                    
    
        this.renderer.compositor = {};
        this.renderer.compositor.buffer              = arg.renderer.compositor.buffer             
        this.renderer.compositor.doEffects           = arg.renderer.compositor.doEffects          
    
        this.renderer.bg0Renderer = {};
        this.renderer.bg0Renderer.BGCharacterBaseBlock   = arg.renderer.bg0Renderer.BGCharacterBaseBlock  
        this.renderer.bg0Renderer.BGLayer                = arg.renderer.bg0Renderer.BGLayer               
        this.renderer.bg0Renderer.BGScreenBaseBlock      = arg.renderer.bg0Renderer.BGScreenBaseBlock     
        this.renderer.bg0Renderer.BGXCoord               = arg.renderer.bg0Renderer.BGXCoord              
        this.renderer.bg0Renderer.BGYCoord               = arg.renderer.bg0Renderer.BGYCoord              
        this.renderer.bg0Renderer.do256                  = arg.renderer.bg0Renderer.do256                 
        this.renderer.bg0Renderer.doMosaic               = arg.renderer.bg0Renderer.doMosaic              
        this.renderer.bg0Renderer.offset                 = arg.renderer.bg0Renderer.offset                
        this.renderer.bg0Renderer.priorityFlag           = arg.renderer.bg0Renderer.priorityFlag          
        this.renderer.bg0Renderer.tileFetched            = arg.renderer.bg0Renderer.tileFetched           
        this.renderer.bg0Renderer.tileMode               = arg.renderer.bg0Renderer.tileMode              
    
        this.renderer.bg1Renderer = {};
        this.renderer.bg1Renderer.BGCharacterBaseBlock   = arg.renderer.bg1Renderer.BGCharacterBaseBlock  
        this.renderer.bg1Renderer.BGLayer                = arg.renderer.bg1Renderer.BGLayer               
        this.renderer.bg1Renderer.BGScreenBaseBlock      = arg.renderer.bg1Renderer.BGScreenBaseBlock     
        this.renderer.bg1Renderer.BGXCoord               = arg.renderer.bg1Renderer.BGXCoord              
        this.renderer.bg1Renderer.BGYCoord               = arg.renderer.bg1Renderer.BGYCoord              
        this.renderer.bg1Renderer.do256                  = arg.renderer.bg1Renderer.do256                 
        this.renderer.bg1Renderer.doMosaic               = arg.renderer.bg1Renderer.doMosaic              
        this.renderer.bg1Renderer.offset                 = arg.renderer.bg1Renderer.offset                
        this.renderer.bg1Renderer.priorityFlag           = arg.renderer.bg1Renderer.priorityFlag          
        this.renderer.bg1Renderer.tileFetched            = arg.renderer.bg1Renderer.tileFetched           
        this.renderer.bg1Renderer.tileMode               = arg.renderer.bg1Renderer.tileMode              
    
        this.renderer.bg2TextRenderer = {};
        this.renderer.bg2TextRenderer.BGCharacterBaseBlock   = arg.renderer.bg2TextRenderer.BGCharacterBaseBlock  
        this.renderer.bg2TextRenderer.BGLayer                = arg.renderer.bg2TextRenderer.BGLayer               
        this.renderer.bg2TextRenderer.BGScreenBaseBlock      = arg.renderer.bg2TextRenderer.BGScreenBaseBlock     
        this.renderer.bg2TextRenderer.BGXCoord               = arg.renderer.bg2TextRenderer.BGXCoord              
        this.renderer.bg2TextRenderer.BGYCoord               = arg.renderer.bg2TextRenderer.BGYCoord              
        this.renderer.bg2TextRenderer.do256                  = arg.renderer.bg2TextRenderer.do256                 
        this.renderer.bg2TextRenderer.doMosaic               = arg.renderer.bg2TextRenderer.doMosaic              
        this.renderer.bg2TextRenderer.offset                 = arg.renderer.bg2TextRenderer.offset                
        this.renderer.bg2TextRenderer.priorityFlag           = arg.renderer.bg2TextRenderer.priorityFlag          
        this.renderer.bg2TextRenderer.tileFetched            = arg.renderer.bg2TextRenderer.tileFetched           
        this.renderer.bg2TextRenderer.tileMode               = arg.renderer.bg2TextRenderer.tileMode              
    
        this.renderer.bg3TextRenderer = {};
        this.renderer.bg3TextRenderer.BGCharacterBaseBlock   = arg.renderer.bg3TextRenderer.BGCharacterBaseBlock  
        this.renderer.bg3TextRenderer.BGLayer                = arg.renderer.bg3TextRenderer.BGLayer               
        this.renderer.bg3TextRenderer.BGScreenBaseBlock      = arg.renderer.bg3TextRenderer.BGScreenBaseBlock     
        this.renderer.bg3TextRenderer.BGXCoord               = arg.renderer.bg3TextRenderer.BGXCoord              
        this.renderer.bg3TextRenderer.BGYCoord               = arg.renderer.bg3TextRenderer.BGYCoord              
        this.renderer.bg3TextRenderer.do256                  = arg.renderer.bg3TextRenderer.do256                 
        this.renderer.bg3TextRenderer.doMosaic               = arg.renderer.bg3TextRenderer.doMosaic              
        this.renderer.bg3TextRenderer.offset                 = arg.renderer.bg3TextRenderer.offset                
        this.renderer.bg3TextRenderer.priorityFlag           = arg.renderer.bg3TextRenderer.priorityFlag          
        this.renderer.bg3TextRenderer.tileFetched            = arg.renderer.bg3TextRenderer.tileFetched           
        this.renderer.bg3TextRenderer.tileMode               = arg.renderer.bg3TextRenderer.tileMode              
    
        this.renderer.bgAffineRenderer0 = {};
        this.renderer.bgAffineRenderer0.BGLayer              = arg.renderer.bgAffineRenderer0.BGLayer             
        this.renderer.bgAffineRenderer0.BGReferenceX         = arg.renderer.bgAffineRenderer0.BGReferenceX        
        this.renderer.bgAffineRenderer0.BGReferenceY         = arg.renderer.bgAffineRenderer0.BGReferenceY        
        this.renderer.bgAffineRenderer0.BGdmx                = arg.renderer.bgAffineRenderer0.BGdmx               
        this.renderer.bgAffineRenderer0.BGdmy                = arg.renderer.bgAffineRenderer0.BGdmy               
        this.renderer.bgAffineRenderer0.BGdx                 = arg.renderer.bgAffineRenderer0.BGdx                
        this.renderer.bgAffineRenderer0.BGdy                 = arg.renderer.bgAffineRenderer0.BGdy                
        this.renderer.bgAffineRenderer0.doMosaic             = arg.renderer.bgAffineRenderer0.doMosaic            
        this.renderer.bgAffineRenderer0.offset               = arg.renderer.bgAffineRenderer0.offset              
        this.renderer.bgAffineRenderer0.pb                   = arg.renderer.bgAffineRenderer0.pb                  
        this.renderer.bgAffineRenderer0.pd                   = arg.renderer.bgAffineRenderer0.pd                  
        this.renderer.bgAffineRenderer0.priorityFlag         = arg.renderer.bgAffineRenderer0.priorityFlag        
        
        this.renderer.bgAffineRenderer1 = {};
        this.renderer.bgAffineRenderer1.BGLayer              = arg.renderer.bgAffineRenderer1.BGLayer             
        this.renderer.bgAffineRenderer1.BGReferenceX         = arg.renderer.bgAffineRenderer1.BGReferenceX        
        this.renderer.bgAffineRenderer1.BGReferenceY         = arg.renderer.bgAffineRenderer1.BGReferenceY        
        this.renderer.bgAffineRenderer1.BGdmx                = arg.renderer.bgAffineRenderer1.BGdmx               
        this.renderer.bgAffineRenderer1.BGdmy                = arg.renderer.bgAffineRenderer1.BGdmy               
        this.renderer.bgAffineRenderer1.BGdx                 = arg.renderer.bgAffineRenderer1.BGdx                
        this.renderer.bgAffineRenderer1.BGdy                 = arg.renderer.bgAffineRenderer1.BGdy                
        this.renderer.bgAffineRenderer1.doMosaic             = arg.renderer.bgAffineRenderer1.doMosaic            
        this.renderer.bgAffineRenderer1.offset               = arg.renderer.bgAffineRenderer1.offset              
        this.renderer.bgAffineRenderer1.pb                   = arg.renderer.bgAffineRenderer1.pb                  
        this.renderer.bgAffineRenderer1.pd                   = arg.renderer.bgAffineRenderer1.pd                  
        this.renderer.bgAffineRenderer1.priorityFlag         = arg.renderer.bgAffineRenderer1.priorityFlag        
    
        this.renderer.bg2FrameBufferRenderer = {};
        this.renderer.bg2FrameBufferRenderer.frameSelect     = arg.renderer.bg2FrameBufferRenderer.frameSelect    
    
        this.renderer.bg2MatrixRenderer = {};
        this.renderer.bg2MatrixRenderer.BGCharacterBaseBlock  = arg.renderer.bg2MatrixRenderer.BGCharacterBaseBlock 
        this.renderer.bg2MatrixRenderer.BGDisplayOverflow     = arg.renderer.bg2MatrixRenderer.BGDisplayOverflow    
        this.renderer.bg2MatrixRenderer.BGScreenBaseBlock     = arg.renderer.bg2MatrixRenderer.BGScreenBaseBlock    
        this.renderer.bg2MatrixRenderer.mapSize               = arg.renderer.bg2MatrixRenderer.mapSize              
        this.renderer.bg2MatrixRenderer.mapSizeComparer       = arg.renderer.bg2MatrixRenderer.mapSizeComparer      
    
        this.renderer.bg3MatrixRenderer = {};
        this.renderer.bg3MatrixRenderer.BGCharacterBaseBlock  = arg.renderer.bg3MatrixRenderer.BGCharacterBaseBlock 
        this.renderer.bg3MatrixRenderer.BGDisplayOverflow     = arg.renderer.bg3MatrixRenderer.BGDisplayOverflow    
        this.renderer.bg3MatrixRenderer.BGScreenBaseBlock     = arg.renderer.bg3MatrixRenderer.BGScreenBaseBlock    
        this.renderer.bg3MatrixRenderer.mapSize               = arg.renderer.bg3MatrixRenderer.mapSize              
        this.renderer.bg3MatrixRenderer.mapSizeComparer       = arg.renderer.bg3MatrixRenderer.mapSizeComparer      
    
        this.renderer.colorEffectsRenderer = {};
        this.renderer.colorEffectsRenderer.alphaBlendAmountTarget1  = arg.renderer.colorEffectsRenderer.alphaBlendAmountTarget1 
        this.renderer.colorEffectsRenderer.alphaBlendAmountTarget2  = arg.renderer.colorEffectsRenderer.alphaBlendAmountTarget2 
        this.renderer.colorEffectsRenderer.brightnessEffectAmount   = arg.renderer.colorEffectsRenderer.brightnessEffectAmount  
        this.renderer.colorEffectsRenderer.colorEffectsType         = arg.renderer.colorEffectsRenderer.colorEffectsType        
        this.renderer.colorEffectsRenderer.effectsTarget1           = arg.renderer.colorEffectsRenderer.effectsTarget1          
        this.renderer.colorEffectsRenderer.effectsTarget2           = arg.renderer.colorEffectsRenderer.effectsTarget2          
    
        this.renderer.mosaicRenderer = {};
        this.renderer.mosaicRenderer.BGMosaicHSize                  = arg.renderer.mosaicRenderer.BGMosaicHSize                 
        this.renderer.mosaicRenderer.BGMosaicVSize                  = arg.renderer.mosaicRenderer.BGMosaicVSize                 
        this.renderer.mosaicRenderer.OBJMosaicHSize                 = arg.renderer.mosaicRenderer.OBJMosaicHSize                
        this.renderer.mosaicRenderer.OBJMosaicVSize                 = arg.renderer.mosaicRenderer.OBJMosaicVSize                
    
        this.renderer.objRenderer = {};
        this.renderer.objRenderer.cyclesToRender                    = arg.renderer.objRenderer.cyclesToRender                   
        this.renderer.objRenderer.OAMRAM                            = arg.renderer.objRenderer.OAMRAM                           
        this.renderer.objRenderer.scratchBuffer                     = arg.renderer.objRenderer.scratchBuffer                    
        this.renderer.objRenderer.scratchWindowBuffer               = arg.renderer.objRenderer.scratchWindowBuffer              
        this.renderer.objRenderer.scratchOBJBuffer                  = arg.renderer.objRenderer.scratchOBJBuffer                 
        this.renderer.objRenderer.OBJMatrixParameters               = arg.renderer.objRenderer.OBJMatrixParameters              
    
        this.renderer.objWindowRenderer = {};
        this.renderer.objWindowRenderer.WINOBJOutside               = arg.renderer.objWindowRenderer.WINOBJOutside              
    
        this.renderer.window0Renderer = {};
        this.renderer.window0Renderer.WINXCoordLeft                 = arg.renderer.window0Renderer.WINXCoordLeft                
        this.renderer.window0Renderer.WINXCoordRight                = arg.renderer.window0Renderer.WINXCoordRight               
        this.renderer.window0Renderer.WINYCoordBottom               = arg.renderer.window0Renderer.WINYCoordBottom              
        this.renderer.window0Renderer.WINYCoordTop                  = arg.renderer.window0Renderer.WINYCoordTop                 
        this.renderer.window0Renderer.windowDisplayControl          = arg.renderer.window0Renderer.windowDisplayControl         
    
        this.renderer.window1Renderer = {};
        this.renderer.window1Renderer.WINXCoordLeft                 = arg.renderer.window1Renderer.WINXCoordLeft                
        this.renderer.window1Renderer.WINXCoordRight                = arg.renderer.window1Renderer.WINXCoordRight               
        this.renderer.window1Renderer.WINYCoordBottom               = arg.renderer.window1Renderer.WINYCoordBottom              
        this.renderer.window1Renderer.WINYCoordTop                  = arg.renderer.window1Renderer.WINYCoordTop                 
        this.renderer.window1Renderer.windowDisplayControl          = arg.renderer.window1Renderer.windowDisplayControl         
    
        /* Audio */
        this.AGBDirectSoundA                     = arg.AGBDirectSoundA                    
        this.AGBDirectSoundAFolded               = arg.AGBDirectSoundAFolded              
        this.AGBDirectSoundALeftCanPlay          = arg.AGBDirectSoundALeftCanPlay         
        this.AGBDirectSoundARightCanPlay         = arg.AGBDirectSoundARightCanPlay        
        this.AGBDirectSoundAShifter              = arg.AGBDirectSoundAShifter             
        this.AGBDirectSoundATimer                = arg.AGBDirectSoundATimer               
        this.AGBDirectSoundB                     = arg.AGBDirectSoundB                    
        this.AGBDirectSoundBFolded               = arg.AGBDirectSoundBFolded              
        this.AGBDirectSoundBLeftCanPlay          = arg.AGBDirectSoundBLeftCanPlay         
        this.AGBDirectSoundBRightCanPlay         = arg.AGBDirectSoundBRightCanPlay        
        this.AGBDirectSoundBShifter              = arg.AGBDirectSoundBShifter             
        this.AGBDirectSoundBTimer                = arg.AGBDirectSoundBTimer               
        this.CGBMixerOutputCacheLeft             = arg.CGBMixerOutputCacheLeft            
        this.CGBMixerOutputCacheLeftFolded       = arg.CGBMixerOutputCacheLeftFolded      
        this.CGBMixerOutputCacheRight            = arg.CGBMixerOutputCacheRight           
        this.CGBMixerOutputCacheRightFolded      = arg.CGBMixerOutputCacheRightFolded     
        this.CGBOutputRatio                      = arg.CGBOutputRatio                     
        this.PWMBitDepthMask                     = arg.PWMBitDepthMask                    
        this.PWMBitDepthMaskShadow               = arg.PWMBitDepthMaskShadow              
        this.PWMWidth                            = arg.PWMWidth                           
        this.PWMWidthOld                         = arg.PWMWidthOld                        
        this.PWMWidthShadow                      = arg.PWMWidthShadow                     
        this.VinLeftChannelMasterVolume          = arg.VinLeftChannelMasterVolume         
        this.VinRightChannelMasterVolume         = arg.VinRightChannelMasterVolume        
        this.audioClocksUntilNextEvent           = arg.audioClocksUntilNextEvent          
        this.audioClocksUntilNextEventCounter    = arg.audioClocksUntilNextEventCounter   
        this.audioIndex                          = arg.audioIndex                         
        this.audioResamplerFirstPassFactor       = arg.audioResamplerFirstPassFactor      
        this.audioTicks                          = arg.audioTicks                         
        this.downsampleInputLeft                 = arg.downsampleInputLeft                
        this.downsampleInputRight                = arg.downsampleInputRight               
        this.mixerOutputCacheLeft                = arg.mixerOutputCacheLeft               
        this.mixerOutputCacheRight               = arg.mixerOutputCacheRight              
        this.mixerSoundBIAS                      = arg.mixerSoundBIAS                     
        this.nr50                                = arg.nr50                               
        this.nr51                                = arg.nr51                               
        this.nr52                                = arg.nr52                               
        this.nr60                                = arg.nr60                               
        this.nr61                                = arg.nr61                               
        this.nr62                                = arg.nr62                               
        this.nr63                                = arg.nr63                               
        this.sequencePosition                    = arg.sequencePosition                   
        this.sequencerClocks                     = arg.sequencerClocks                    
        this.soundMasterEnabled                  = arg.soundMasterEnabled                 
    
        this.channel1 = {}; 
        this.channel1.CachedDuty                 = arg.channel1.CachedDuty                
        this.channel1.DutyTracker                = arg.channel1.DutyTracker               
        this.channel1.Enabled                    = arg.channel1.Enabled                   
        this.channel1.FrequencyCounter           = arg.channel1.FrequencyCounter          
        this.channel1.FrequencyTracker           = arg.channel1.FrequencyTracker          
        this.channel1.ShadowFrequency            = arg.channel1.ShadowFrequency           
        this.channel1.SweepFault                 = arg.channel1.SweepFault                
        this.channel1.Swept                      = arg.channel1.Swept                     
        this.channel1.canPlay                    = arg.channel1.canPlay                   
        this.channel1.consecutive                = arg.channel1.consecutive               
        this.channel1.currentSampleLeft          = arg.channel1.currentSampleLeft         
        this.channel1.currentSampleRight         = arg.channel1.currentSampleRight        
        this.channel1.decreaseSweep              = arg.channel1.decreaseSweep             
        this.channel1.envelopeSweeps             = arg.channel1.envelopeSweeps            
        this.channel1.envelopeSweepsLast         = arg.channel1.envelopeSweepsLast        
        this.channel1.envelopeType               = arg.channel1.envelopeType              
        this.channel1.envelopeVolume             = arg.channel1.envelopeVolume            
        this.channel1.frequency                  = arg.channel1.frequency                 
        this.channel1.frequencySweepDivider      = arg.channel1.frequencySweepDivider     
        this.channel1.lastTimeSweep              = arg.channel1.lastTimeSweep             
        this.channel1.leftEnable                 = arg.channel1.leftEnable                
        this.channel1.nr10                       = arg.channel1.nr10                      
        this.channel1.nr11                       = arg.channel1.nr11                      
        this.channel1.nr12                       = arg.channel1.nr12                      
        this.channel1.nr14                       = arg.channel1.nr14                      
        this.channel1.rightEnable                = arg.channel1.rightEnable               
        this.channel1.timeSweep                  = arg.channel1.timeSweep                 
        this.channel1.totalLength                = arg.channel1.totalLength               
    
        this.channel2 = {};
        this.channel2.CachedDuty                 = arg.channel2.CachedDuty                
        this.channel2.DutyTracker                = arg.channel2.DutyTracker               
        this.channel2.Enabled                    = arg.channel2.Enabled                   
        this.channel2.FrequencyCounter           = arg.channel2.FrequencyCounter          
        this.channel2.FrequencyTracker           = arg.channel2.FrequencyTracker          
        this.channel2.ShadowFrequency            = arg.channel2.ShadowFrequency           
        this.channel2.canPlay                    = arg.channel2.canPlay                   
        this.channel2.consecutive                = arg.channel2.consecutive               
        this.channel2.currentSampleLeft          = arg.channel2.currentSampleLeft         
        this.channel2.currentSampleRight         = arg.channel2.currentSampleRight        
        this.channel2.envelopeSweeps             = arg.channel2.envelopeSweeps            
        this.channel2.envelopeSweepsLast         = arg.channel2.envelopeSweepsLast        
        this.channel2.envelopeType               = arg.channel2.envelopeType              
        this.channel2.envelopeVolume             = arg.channel2.envelopeVolume            
        this.channel2.frequency                  = arg.channel2.frequency                 
        this.channel2.leftEnable                 = arg.channel2.leftEnable                
        this.channel2.nr21                       = arg.channel2.nr21                      
        this.channel2.nr22                       = arg.channel2.nr22                      
        this.channel2.nr23                       = arg.channel2.nr23                      
        this.channel2.nr24                       = arg.channel2.nr24                      
        this.channel2.rightEnable                = arg.channel2.rightEnable               
        this.channel2.totalLength                = arg.channel2.totalLength               
    
        this.channel3 = {};
        this.channel3.Enabled                    = arg.channel3.Enabled                   
        this.channel3.FrequencyPeriod            = arg.channel3.FrequencyPeriod           
        this.channel3.PCM                        = arg.channel3.PCM                       
        this.channel3.WAVERAM8                   = arg.channel3.WAVERAM8                  
        this.channel3.WAVERAMBankAccessed        = arg.channel3.WAVERAMBankAccessed       
        this.channel3.WAVERAMBankSpecified       = arg.channel3.WAVERAMBankSpecified      
        this.channel3.WaveRAMBankSize            = arg.channel3.WaveRAMBankSize           
        this.channel3.cachedSample               = arg.channel3.cachedSample              
        this.channel3.canPlay                    = arg.channel3.canPlay                   
        this.channel3.consecutive                = arg.channel3.consecutive               
        this.channel3.counter                    = arg.channel3.counter                   
        this.channel3.currentSampleLeft          = arg.channel3.currentSampleLeft         
        this.channel3.currentSampleRight         = arg.channel3.currentSampleRight        
        this.channel3.frequency                  = arg.channel3.frequency                 
        this.channel3.lastSampleLookup           = arg.channel3.lastSampleLookup          
        this.channel3.leftEnable                 = arg.channel3.leftEnable                
        this.channel3.nr30                       = arg.channel3.nr30                      
        this.channel3.nr31                       = arg.channel3.nr31                      
        this.channel3.nr32                       = arg.channel3.nr32                      
        this.channel3.nr33                       = arg.channel3.nr33                      
        this.channel3.nr34                       = arg.channel3.nr34                      
        this.channel3.patternType                = arg.channel3.patternType               
        this.channel3.rightEnable                = arg.channel3.rightEnable               
        this.channel3.totalLength                = arg.channel3.totalLength               
    
        // LSFR7Table
        // LSFR15Table
        this.channel4 = {};
        this.channel4.BitRange                   = arg.channel4.BitRange                  
        this.channel4.Enabled                    = arg.channel4.Enabled                   
        this.channel4.FrequencyPeriod            = arg.channel4.FrequencyPeriod           
        this.channel4.VolumeShifter              = arg.channel4.VolumeShifter             
        this.channel4.cachedSample               = arg.channel4.cachedSample              
        this.channel4.canPlay                    = arg.channel4.canPlay                   
        this.channel4.consecutive                = arg.channel4.consecutive               
        this.channel4.counter                    = arg.channel4.counter                   
        this.channel4.currentSampleLeft          = arg.channel4.currentSampleLeft         
        this.channel4.currentSampleRight         = arg.channel4.currentSampleRight        
        this.channel4.currentVolume              = arg.channel4.currentVolume             
        this.channel4.envelopeSweeps             = arg.channel4.envelopeSweeps            
        this.channel4.envelopeSweepsLast         = arg.channel4.envelopeSweepsLast        
        this.channel4.envelopeType               = arg.channel4.envelopeType              
        this.channel4.envelopeVolume             = arg.channel4.envelopeVolume            
        this.channel4.lastSampleLookup           = arg.channel4.lastSampleLookup          
        this.channel4.leftEnable                 = arg.channel4.leftEnable                
        this.channel4.noiseSampleTable           = arg.channel4.noiseSampleTable          
        this.channel4.nr42                       = arg.channel4.nr42                      
        this.channel4.nr43                       = arg.channel4.nr43                      
        this.channel4.nr44                       = arg.channel4.nr44                      
        this.channel4.rightEnable                = arg.channel4.rightEnable               
        this.channel4.totalLength                = arg.channel4.totalLength               
    
        this.FIFOA = {};
        this.FIFOA.buffer                        = arg.FIFOA.buffer                       
        this.FIFOA.count                         = arg.FIFOA.count                        
        this.FIFOA.position                      = arg.FIFOA.position                     
    
        this.FIFOB = {};
        this.FIFOB.buffer                        = arg.FIFOB.buffer                       
        this.FIFOB.count                         = arg.FIFOB.count                        
        this.FIFOB.position                      = arg.FIFOB.position                     
    
        /* Serial */
        this.JOYBUS_CNTL_FLAGS              = arg.JOYBUS_CNTL_FLAGS             
        this.JOYBUS_IRQ                     = arg.JOYBUS_IRQ                    
        this.JOYBUS_RECV0                   = arg.JOYBUS_RECV0                  
        this.JOYBUS_RECV1                   = arg.JOYBUS_RECV1                  
        this.JOYBUS_RECV2                   = arg.JOYBUS_RECV2                  
        this.JOYBUS_RECV3                   = arg.JOYBUS_RECV3                  
        this.JOYBUS_SEND0                   = arg.JOYBUS_SEND0                  
        this.JOYBUS_SEND1                   = arg.JOYBUS_SEND1                  
        this.JOYBUS_SEND2                   = arg.JOYBUS_SEND2                  
        this.JOYBUS_SEND3                   = arg.JOYBUS_SEND3                  
        this.JOYBUS_STAT                    = arg.JOYBUS_STAT                   
        this.RCNTDataBitFlow                = arg.RCNTDataBitFlow               
        this.RCNTDataBits                   = arg.RCNTDataBits                  
        this.RCNTIRQ                        = arg.RCNTIRQ                       
        this.RCNTMode                       = arg.RCNTMode                      
        this.SIOBaudRate                    = arg.SIOBaudRate                   
        this.SIOCNT0_DATA                   = arg.SIOCNT0_DATA                  
        this.SIOCNT_IRQ                     = arg.SIOCNT_IRQ                    
        this.SIOCNT_MODE                    = arg.SIOCNT_MODE                   
        this.SIOCNT_UART_CTS                = arg.SIOCNT_UART_CTS               
        this.SIOCNT_UART_FIFO               = arg.SIOCNT_UART_FIFO              
        this.SIOCNT_UART_FIFO_ENABLE        = arg.SIOCNT_UART_FIFO_ENABLE       
        this.SIOCNT_UART_MISC               = arg.SIOCNT_UART_MISC              
        this.SIOCNT_UART_PARITY_ENABLE      = arg.SIOCNT_UART_PARITY_ENABLE     
        this.SIOCNT_UART_RECV_ENABLE        = arg.SIOCNT_UART_RECV_ENABLE       
        this.SIOCNT_UART_SEND_ENABLE        = arg.SIOCNT_UART_SEND_ENABLE       
        this.SIOCOMMERROR                   = arg.SIOCOMMERROR                  
        this.SIODATA8                       = arg.SIODATA8                      
        this.SIODATA_A                      = arg.SIODATA_A                     
        this.SIODATA_B                      = arg.SIODATA_B                     
        this.SIODATA_C                      = arg.SIODATA_C                     
        this.SIODATA_D                      = arg.SIODATA_D                     
        this.SIOMULT_PLAYER_NUMBER          = arg.SIOMULT_PLAYER_NUMBER         
        this.SIOShiftClockDivider           = arg.SIOShiftClockDivider          
        this.SIOShiftClockExternal          = arg.SIOShiftClockExternal         
        this.SIOTransferStarted             = arg.SIOTransferStarted            
        this.serialBitsShifted              = arg.serialBitsShifted             
        this.shiftClocks                    = arg.shiftClocks                   
    
        /* Save Data */
        this.saveType                = arg.saveType               
        // TODO: switch reference to saveType?
    
        this.GPIOChip = {};
        this.GPIOChip.data           = arg.GPIOChip.data          
        this.GPIOChip.direction      = arg.GPIOChip.direction     
        this.GPIOChip.readWrite      = arg.GPIOChip.readWrite     
        this.GPIOChip.type           = arg.GPIOChip.type          
        
        this.GPIOChip.RTC = {};
        this.GPIOChip.RTC.pins            = arg.GPIOChip.RTC.pins           
        this.GPIOChip.RTC.direction       = arg.GPIOChip.RTC.direction      
        this.GPIOChip.RTC.totalBytes      = arg.GPIOChip.RTC.totalBytes     
        this.GPIOChip.RTC.bytesRemaining  = arg.GPIOChip.RTC.bytesRemaining 
        this.GPIOChip.RTC.transferStep    = arg.GPIOChip.RTC.transferStep   
        this.GPIOChip.RTC.reading         = arg.GPIOChip.RTC.reading        
        this.GPIOChip.RTC.bitsRead        = arg.GPIOChip.RTC.bitsRead       
        this.GPIOChip.RTC.bits            = arg.GPIOChip.RTC.bits           
        this.GPIOChip.RTC.command         = arg.GPIOChip.RTC.command        
        this.GPIOChip.RTC.control         = arg.GPIOChip.RTC.control        
        this.GPIOChip.RTC.time            = arg.GPIOChip.RTC.time           
    
        this.UNDETERMINED = {};
        this.UNDETERMINED.saves         = arg.UNDETERMINED.saves        
        this.UNDETERMINED.possible      = arg.UNDETERMINED.possible     
    
        this.SRAMChip = {};
        this.SRAMChip.TILTChip          = arg.SRAMChip.TILTChip         
        this.SRAMChip.TILTChipUnlocked  = arg.SRAMChip.TILTChipUnlocked 
        this.SRAMChip.saves             = arg.SRAMChip.saves            
    
        this.FLASHChip = {};
        this.FLASHChip.BANKOffset               = arg.FLASHChip.BANKOffset              
        this.FLASHChip.flashCommand             = arg.FLASHChip.flashCommand            
        this.FLASHChip.flashCommandUnlockStage  = arg.FLASHChip.flashCommandUnlockStage 
        this.FLASHChip.largestSizePossible      = arg.FLASHChip.largestSizePossible     
        this.FLASHChip.notATMEL                 = arg.FLASHChip.notATMEL                
        this.FLASHChip.saves                    = arg.FLASHChip.saves                   
        this.FLASHChip.writeBytesLeft           = arg.FLASHChip.writeBytesLeft          
    
        this.EEPROMChip = {};
        this.EEPROMChip.address              = arg.EEPROMChip.address             
        this.EEPROMChip.bitsProcessed        = arg.EEPROMChip.bitsProcessed       
        this.EEPROMChip.buffer               = arg.EEPROMChip.buffer              
        this.EEPROMChip.largestSizePossible  = arg.EEPROMChip.largestSizePossible 
        this.EEPROMChip.mode                 = arg.EEPROMChip.mode                
        this.EEPROMChip.saves                = arg.EEPROMChip.saves               
    
    }
}

SaveState.prototype.assign = function (target, name, value) {

    if (!target || target[name] === undefined) 
    {
        return;
    }

    if (typeof target[name] == 'number' || typeof target[name] == 'boolean' || typeof target[name] == 'string') {
        target[name] = value;
    } else if (target[name] !== null) {
        Object.assign(target[name], value);
    }

}

SaveState.prototype.load = function (IOCore) {

    /* General */
    this.assign(IOCore, "accumulatedClocks"               , this.accumulatedClocks            );
    this.assign(IOCore, "cyclesOveriteratedPreviously"    , this.cyclesOveriteratedPreviously );
    this.assign(IOCore, "cyclesToIterate"                 , this.cyclesToIterate              );
    this.assign(IOCore, "graphicsClocks"                  , this.graphicsClocks               );
    this.assign(IOCore, "nextEventClocks"                 , this.nextEventClocks              );
    this.assign(IOCore, "systemStatus"                    , this.systemStatus                 );
    this.assign(IOCore, "timerClocks"                     , this.timerClocks                  );

    /* Memory */
    this.assign(IOCore.memory, "internalRAM"              , this.internalRAM             );
    this.assign(IOCore.memory, "externalRAM"              , this.externalRAM             );
    this.assign(IOCore.memory, "WRAMControlFlags"         , this.WRAMControlFlags        );
    this.assign(IOCore.memory, "lastBIOSREAD"             , this.lastBIOSREAD            ); 

    /* DMA */
    this.assign(IOCore.dma, "currentMatch"                , this.dma.currentMatch        );
    this.assign(IOCore.dma, "fetch"                       , this.dma.fetch               );

    this.assign(IOCore.dmaChannel0, "destination"         , this.dma0.destination        );
    this.assign(IOCore.dmaChannel0, "destinationControl"  , this.dma0.destinationControl );       
    this.assign(IOCore.dmaChannel0, "destinationShadow"   , this.dma0.destinationShadow  );      
    this.assign(IOCore.dmaChannel0, "dmaType"             , this.dma0.dmaType            );       
    this.assign(IOCore.dmaChannel0, "enabled"             , this.dma0.enabled            );        
    this.assign(IOCore.dmaChannel0, "irqFlagging"         , this.dma0.irqFlagging        );
    this.assign(IOCore.dmaChannel0, "is32Bit"             , this.dma0.is32Bit            );        
    this.assign(IOCore.dmaChannel0, "pending"             , this.dma0.pending            );         
    this.assign(IOCore.dmaChannel0, "repeat"              , this.dma0.repeat             );       
    this.assign(IOCore.dmaChannel0, "source"              , this.dma0.source             );      
    this.assign(IOCore.dmaChannel0, "sourceControl"       , this.dma0.sourceControl      );  
    this.assign(IOCore.dmaChannel0, "sourceShadow"        , this.dma0.sourceShadow       ); 
    this.assign(IOCore.dmaChannel0, "wordCount"           , this.dma0.wordCount          );           
    this.assign(IOCore.dmaChannel0, "wordCountShadow"     , this.dma0.wordCountShadow    );

    this.assign(IOCore.dmaChannel1, "destination"         , this.dma1.destination        );
    this.assign(IOCore.dmaChannel1, "destinationControl"  , this.dma1.destinationControl );       
    this.assign(IOCore.dmaChannel1, "destinationShadow"   , this.dma1.destinationShadow  );      
    this.assign(IOCore.dmaChannel1, "dmaType"             , this.dma1.dmaType            );       
    this.assign(IOCore.dmaChannel1, "enabled"             , this.dma1.enabled            );        
    this.assign(IOCore.dmaChannel1, "irqFlagging"         , this.dma1.irqFlagging        );
    this.assign(IOCore.dmaChannel1, "is32Bit"             , this.dma1.is32Bit            );        
    this.assign(IOCore.dmaChannel1, "pending"             , this.dma1.pending            );         
    this.assign(IOCore.dmaChannel1, "repeat"              , this.dma1.repeat             );       
    this.assign(IOCore.dmaChannel1, "source"              , this.dma1.source             );      
    this.assign(IOCore.dmaChannel1, "sourceControl"       , this.dma1.sourceControl      );  
    this.assign(IOCore.dmaChannel1, "sourceShadow"        , this.dma1.sourceShadow       ); 
    this.assign(IOCore.dmaChannel1, "wordCount"           , this.dma1.wordCount          );           
    this.assign(IOCore.dmaChannel1, "wordCountShadow"     , this.dma1.wordCountShadow    );

    this.assign(IOCore.dmaChannel2, "destination"         , this.dma2.destination        );
    this.assign(IOCore.dmaChannel2, "destinationControl"  , this.dma2.destinationControl );       
    this.assign(IOCore.dmaChannel2, "destinationShadow"   , this.dma2.destinationShadow  );      
    this.assign(IOCore.dmaChannel2, "dmaType"             , this.dma2.dmaType            );       
    this.assign(IOCore.dmaChannel2, "enabled"             , this.dma2.enabled            );        
    this.assign(IOCore.dmaChannel2, "irqFlagging"         , this.dma2.irqFlagging        );
    this.assign(IOCore.dmaChannel2, "is32Bit"             , this.dma2.is32Bit            );        
    this.assign(IOCore.dmaChannel2, "pending"             , this.dma2.pending            );         
    this.assign(IOCore.dmaChannel2, "repeat"              , this.dma2.repeat             );       
    this.assign(IOCore.dmaChannel2, "source"              , this.dma2.source             );      
    this.assign(IOCore.dmaChannel2, "sourceControl"       , this.dma2.sourceControl      );  
    this.assign(IOCore.dmaChannel2, "sourceShadow"        , this.dma2.sourceShadow       ); 
    this.assign(IOCore.dmaChannel2, "wordCount"           , this.dma2.wordCount          );           
    this.assign(IOCore.dmaChannel2, "wordCountShadow"     , this.dma2.wordCountShadow    );

    this.assign(IOCore.dmaChannel3, "destination"            , this.dma3.destination            );      
    this.assign(IOCore.dmaChannel3, "destinationControl"     , this.dma3.destinationControl     );             
    this.assign(IOCore.dmaChannel3, "destinationShadow"      , this.dma3.destinationShadow      );            
    this.assign(IOCore.dmaChannel3, "displaySyncEnableDelay" , this.dma3.displaySyncEnableDelay );                 
    this.assign(IOCore.dmaChannel3, "dmaType"                , this.dma3.dmaType                );  
    this.assign(IOCore.dmaChannel3, "enabled"                , this.dma3.enabled                );  
    this.assign(IOCore.dmaChannel3, "gamePakDMA"             , this.dma3.gamePakDMA             );     
    this.assign(IOCore.dmaChannel3, "irqFlagging"            , this.dma3.irqFlagging            );      
    this.assign(IOCore.dmaChannel3, "is32Bit"                , this.dma3.is32Bit                );  
    this.assign(IOCore.dmaChannel3, "pending"                , this.dma3.pending                );  
    this.assign(IOCore.dmaChannel3, "repeat"                 , this.dma3.repeat                 ); 
    this.assign(IOCore.dmaChannel3, "source"                 , this.dma3.source                 ); 
    this.assign(IOCore.dmaChannel3, "sourceControl"          , this.dma3.sourceControl          );        
    this.assign(IOCore.dmaChannel3, "sourceShadow"           , this.dma3.sourceShadow           );       
    this.assign(IOCore.dmaChannel3, "wordCount"              , this.dma3.wordCount              );    
    this.assign(IOCore.dmaChannel3, "wordCountShadow"        , this.dma3.wordCountShadow        );     
                          
    /* CPU */                             
    this.assign(IOCore.cpu, "registers"                   , this.registers                  );   
    this.assign(IOCore.cpu, "registersUSR"                , this.registersUSR               );
    this.assign(IOCore.cpu, "registersFIQ"                , this.registersFIQ               );
    this.assign(IOCore.cpu, "registersSVC"                , this.registersSVC               );
    this.assign(IOCore.cpu, "registersABT"                , this.registersABT               );
    this.assign(IOCore.cpu, "registersIRQ"                , this.registersIRQ               );
    this.assign(IOCore.cpu, "registersUND"                , this.registersUND               );
    this.assign(IOCore.cpu, "modeFlags"                   , this.modeFlags                  );
    this.assign(IOCore.cpu, "SPSR"                        , this.SPSR                       );
    this.assign(IOCore.cpu, "mul64ResultHigh"             , this.mul64ResultHigh            );
    this.assign(IOCore.cpu, "mul64ResultLow"              , this.mul64ResultLow             );
    this.assign(IOCore.cpu, "triggeredIRQ"                , this.triggeredIRQ               );

    this.assign(IOCore.THUMB, "decode"                    , this.THUMB.decode               );
    this.assign(IOCore.THUMB, "execute"                   , this.THUMB.execute              );
    this.assign(IOCore.THUMB, "fetch"                     , this.THUMB.fetch                );

    this.assign(IOCore.ARM, "decode"                      , this.ARM.decode                 );
    this.assign(IOCore.ARM, "execute"                     , this.ARM.execute                );
    this.assign(IOCore.ARM, "fetch"                       , this.ARM.fetch                  );
     
    /* Timers */           
    this.assign(IOCore.timer, "timer0Counter"             , this.timer0Counter              );
    this.assign(IOCore.timer, "timer0Reload"              , this.timer0Reload               );
    this.assign(IOCore.timer, "timer0Control"             , this.timer0Control              );
    this.assign(IOCore.timer, "timer0Enabled"             , this.timer0Enabled              ); 
    this.assign(IOCore.timer, "timer0IRQ"                 , this.timer0IRQ                  ); 
    this.assign(IOCore.timer, "timer0Precounter"          , this.timer0Precounter           );
    this.assign(IOCore.timer, "timer0Prescalar"           , this.timer0Prescalar            );
    this.assign(IOCore.timer, "timer0PrescalarShifted"    , this.timer0PrescalarShifted     );
    this.assign(IOCore.timer, "timer1Counter"             , this.timer1Counter              );
    this.assign(IOCore.timer, "timer1Reload"              , this.timer1Reload               );
    this.assign(IOCore.timer, "timer1Control"             , this.timer1Control              );
    this.assign(IOCore.timer, "timer1Enabled"             , this.timer1Enabled              ); 
    this.assign(IOCore.timer, "timer1IRQ"                 , this.timer1IRQ                  ); 
    this.assign(IOCore.timer, "timer1Precounter"          , this.timer1Precounter           );
    this.assign(IOCore.timer, "timer1Prescalar"           , this.timer1Prescalar            );
    this.assign(IOCore.timer, "timer1PrescalarShifted"    , this.timer1PrescalarShifted     );
    this.assign(IOCore.timer, "timer1CountUp"             , this.timer1CountUp              ); 
    this.assign(IOCore.timer, "timer2Counter"             , this.timer2Counter              );
    this.assign(IOCore.timer, "timer2Reload"              , this.timer2Reload               );
    this.assign(IOCore.timer, "timer2Control"             , this.timer2Control              );
    this.assign(IOCore.timer, "timer2Enabled"             , this.timer2Enabled              ); 
    this.assign(IOCore.timer, "timer2IRQ"                 , this.timer2IRQ                  ); 
    this.assign(IOCore.timer, "timer2Precounter"          , this.timer2Precounter           );
    this.assign(IOCore.timer, "timer2Prescalar"           , this.timer2Prescalar            );
    this.assign(IOCore.timer, "timer2PrescalarShifted"    , this.timer2PrescalarShifted     );
    this.assign(IOCore.timer, "timer2CountUp"             , this.timer2CountUp              ); 
    this.assign(IOCore.timer, "timer3Counter"             , this.timer3Counter              );
    this.assign(IOCore.timer, "timer3Reload"              , this.timer3Reload               );
    this.assign(IOCore.timer, "timer3Control"             , this.timer3Control              );
    this.assign(IOCore.timer, "timer3Enabled"             , this.timer3Enabled              ); 
    this.assign(IOCore.timer, "timer3IRQ"                 , this.timer3IRQ                  ); 
    this.assign(IOCore.timer, "timer3Precounter"          , this.timer3Precounter           );
    this.assign(IOCore.timer, "timer3Prescalar"           , this.timer3Prescalar            );
    this.assign(IOCore.timer, "timer3PrescalarShifted"    , this.timer3PrescalarShifted     );
    this.assign(IOCore.timer, "timer3CountUp"             , this.timer3CountUp              ); 
    this.assign(IOCore.timer, "timer1UseMainClocks"       , this.timer1UseMainClocks        ); 
    this.assign(IOCore.timer, "timer1UseChainedClocks"    , this.timer1UseChainedClocks     ); 
    this.assign(IOCore.timer, "timer2UseMainClocks"       , this.timer2UseMainClocks        ); 
    this.assign(IOCore.timer, "timer2UseChainedClocks"    , this.timer2UseChainedClocks     ); 
    this.assign(IOCore.timer, "timer3UseMainClocks"       , this.timer3UseMainClocks        ); 
    this.assign(IOCore.timer, "timer3UseChainedClocks"    , this.timer3UseChainedClocks     );  
    
    /* Wait */    
    this.assign(IOCore.wait, "WRAMConfiguration"          , this.WRAMConfiguration          );
    this.assign(IOCore.wait, "WRAMWaitState"              , this.WRAMWaitState              );    
    this.assign(IOCore.wait, "SRAMWaitState"              , this.SRAMWaitState              );    
    this.assign(IOCore.wait, "WAITCNT0"                   , this.WAITCNT0                   );         
    this.assign(IOCore.wait, "WAITCNT1"                   , this.WAITCNT1                   );         
    this.assign(IOCore.wait, "POSTBOOT"                   , this.POSTBOOT                   );         
    this.assign(IOCore.wait, "isRendering"                , this.isRendering                );      
    this.assign(IOCore.wait, "isOAMRendering"             , this.isOAMRendering             );   
    this.assign(IOCore.wait, "nonSequential"              , this.nonSequential              );    
    this.assign(IOCore.wait, "buffer"                     , this.buffer                     );           
    this.assign(IOCore.wait, "clocks"                     , this.clocks                     ); 

    /* Serial */
    this.assign(IOCore.serial, "SIODATA_A"                ,this.SIODATA_A                   );     
    this.assign(IOCore.serial, "SIODATA_B"                ,this.SIODATA_B                   );     
    this.assign(IOCore.serial, "SIODATA_C"                ,this.SIODATA_C                   );     
    this.assign(IOCore.serial, "SIODATA_D"                ,this.SIODATA_D                   );     
    this.assign(IOCore.serial, "SIOShiftClockExternal"    ,this.SIOShiftClockExternal       );     
    this.assign(IOCore.serial, "SIOShiftClockDivider"     ,this.SIOShiftClockDivider        );     
    this.assign(IOCore.serial, "SIOCNT0_DATA"             ,this.SIOCNT0_DATA                );     
    this.assign(IOCore.serial, "SIOTransferStarted"       ,this.SIOTransferStarted          );     
    this.assign(IOCore.serial, "SIOMULT_PLAYER_NUMBER"    ,this.SIOMULT_PLAYER_NUMBER       );     
    this.assign(IOCore.serial, "SIOCOMMERROR"             ,this.SIOCOMMERROR                );     
    this.assign(IOCore.serial, "SIOBaudRate"              ,this.SIOBaudRate                 );     
    this.assign(IOCore.serial, "SIOCNT_UART_CTS"          ,this.SIOCNT_UART_CTS             );   
    this.assign(IOCore.serial, "SIOCNT_UART_MISC"         ,this.SIOCNT_UART_MISC            );     
    this.assign(IOCore.serial, "SIOCNT_UART_FIFO"         ,this.SIOCNT_UART_FIFO            );     
    this.assign(IOCore.serial, "SIOCNT_IRQ"               ,this.SIOCNT_IRQ                  );     
    this.assign(IOCore.serial, "SIOCNT_MODE"              ,this.SIOCNT_MODE                 );     
    this.assign(IOCore.serial, "SIOCNT_UART_RECV_ENABLE"  ,this.SIOCNT_UART_RECV_ENABLE     );      
    this.assign(IOCore.serial, "SIOCNT_UART_SEND_ENABLE"  ,this.SIOCNT_UART_SEND_ENABLE     );      
    this.assign(IOCore.serial, "SIOCNT_UART_PARITY_ENABLE",this.SIOCNT_UART_PARITY_ENABLE   );       
    this.assign(IOCore.serial, "SIOCNT_UART_FIFO_ENABLE"  ,this.SIOCNT_UART_FIFO_ENABLE     );      
    this.assign(IOCore.serial, "SIODATA8"                 ,this.SIODATA8                    );     
    this.assign(IOCore.serial, "RCNTMode"                 ,this.RCNTMode                    );     
    this.assign(IOCore.serial, "RCNTIRQ"                  ,this.RCNTIRQ                     );   
    this.assign(IOCore.serial, "RCNTDataBits"             ,this.RCNTDataBits                );     
    this.assign(IOCore.serial, "RCNTDataBitFlow"          ,this.RCNTDataBitFlow             );     
    this.assign(IOCore.serial, "JOYBUS_IRQ"               ,this.JOYBUS_IRQ                  );     
    this.assign(IOCore.serial, "JOYBUS_CNTL_FLAGS"        ,this.JOYBUS_CNTL_FLAGS           );     
    this.assign(IOCore.serial, "JOYBUS_RECV0"             ,this.JOYBUS_RECV0                );     
    this.assign(IOCore.serial, "JOYBUS_RECV1"             ,this.JOYBUS_RECV1                );     
    this.assign(IOCore.serial, "JOYBUS_RECV2"             ,this.JOYBUS_RECV2                );     
    this.assign(IOCore.serial, "JOYBUS_RECV3"             ,this.JOYBUS_RECV3                );     
    this.assign(IOCore.serial, "JOYBUS_SEND0"             ,this.JOYBUS_SEND0                );     
    this.assign(IOCore.serial, "JOYBUS_SEND1"             ,this.JOYBUS_SEND1                );     
    this.assign(IOCore.serial, "JOYBUS_SEND2"             ,this.JOYBUS_SEND2                );     
    this.assign(IOCore.serial, "JOYBUS_SEND3"             ,this.JOYBUS_SEND3                );     
    this.assign(IOCore.serial, "JOYBUS_STAT"              ,this.JOYBUS_STAT                 );     
    this.assign(IOCore.serial, "shiftClocks"              ,this.shiftClocks                 );     
    this.assign(IOCore.serial, "serialBitsShifted"        ,this.serialBitsShifted           );

    /* Run Loop */
    this.assign(IOCore, "systemStatus"                    ,this.systemStatus                );
    this.assign(IOCore, "cyclesToIterate"                 ,this.cyclesToIterate             );
    this.assign(IOCore, "cyclesOveriteratedPreviously"    ,this.cyclesOveriteratedPreviously);
    this.assign(IOCore, "accumulatedClocks"               ,this.accumulatedClocks           );
    this.assign(IOCore, "graphicsClocks"                  ,this.graphicsClocks              );
    this.assign(IOCore, "timerClocks"                     ,this.timerClocks                 );
    this.assign(IOCore, "serialClocks"                    ,this.serialClocks                );
    this.assign(IOCore, "nextEventClocks"                 ,this.nextEventClocks             );

    /* IRQ */
    this.assign(IOCore.irq, "interruptsEnabled"           ,this.interruptsEnabled           );
    this.assign(IOCore.irq, "interruptsRequested"         ,this.interruptsRequested         );
    this.assign(IOCore.irq, "IME"                         ,this.IME                         );

    /* Video */
    this.assign(IOCore.gfxState                             , "renderedScanLine"    ,this.renderedScanLine           );
    this.assign(IOCore.gfxState                             , "statusFlags"         ,this.statusFlags                );
    this.assign(IOCore.gfxState                             , "IRQFlags"            ,this.IRQFlags                   );
    this.assign(IOCore.gfxState                             , "VCounter"            ,this.VCounter                   );
    this.assign(IOCore.gfxState                             , "currentScanLine"     ,this.currentScanLine            );
    this.assign(IOCore.gfxState                             , "LCDTicks"            ,this.LCDTicks                   );

    this.assign(IOCore.gfxRenderer                          , "IOData8"             ,this.IOData8                    );

    this.assign(IOCore.gfxRenderer.renderer, "displayControl"      ,this.renderer.displayControl    );
    this.assign(IOCore.gfxRenderer.renderer, "display"             ,this.renderer.display           );
    this.assign(IOCore.gfxRenderer.renderer, "greenSwap"           ,this.renderer.greenSwap         );
    this.assign(IOCore.gfxRenderer.renderer, "WINOutside"          ,this.renderer.WINOutside        );
    this.assign(IOCore.gfxRenderer.renderer, "paletteRAM"          ,this.renderer.paletteRAM        );
    this.assign(IOCore.gfxRenderer.renderer, "VRAM"                ,this.renderer.VRAM              );
    this.assign(IOCore.gfxRenderer.renderer, "buffer"              ,this.renderer.buffer            );
    this.assign(IOCore.gfxRenderer.renderer, "frameBuffer"         ,this.renderer.frameBuffer       );
    this.assign(IOCore.gfxRenderer.renderer, "swizzledFrame"       ,this.renderer.swizzledFrame     );
    this.assign(IOCore.gfxRenderer.renderer, "totalLinesPassed"    ,this.renderer.totalLinesPassed  );
    this.assign(IOCore.gfxRenderer.renderer, "queuedScanLines"     ,this.renderer.queuedScanLines   );
    this.assign(IOCore.gfxRenderer.renderer, "lastUnrenderedLine"  ,this.renderer.lastUnrenderedLine);
    this.assign(IOCore.gfxRenderer.renderer, "backdrop"            ,this.renderer.backdrop          );
    this.assign(IOCore.gfxRenderer.renderer, "palette256"          ,this.renderer.palette256        );
    this.assign(IOCore.gfxRenderer.renderer, "paletteOBJ256"       ,this.renderer.paletteOBJ256     );
    this.assign(IOCore.gfxRenderer.renderer, "palette16"           ,this.renderer.palette16         );
    this.assign(IOCore.gfxRenderer.renderer, "paletteOBJ16"        ,this.renderer.paletteOBJ16      );

    this.assign(IOCore.gfxRenderer.renderer, "lineBuffer"          ,this.renderer.lineBuffer        );

    this.assign(IOCore.gfxRenderer.renderer.compositor, "buffer"     ,this.renderer.compositor.buffer   );   
    this.assign(IOCore.gfxRenderer.renderer.compositor, "doEffects"  ,this.renderer.compositor.doEffects ); 

    this.assign(IOCore.gfxRenderer.renderer.bg0Renderer                  , "BGCharacterBaseBlock"   , this.renderer.bg0Renderer.BGCharacterBaseBlock                     );
    this.assign(IOCore.gfxRenderer.renderer.bg0Renderer                  , "BGLayer"                , this.renderer.bg0Renderer.BGLayer                                  );
    this.assign(IOCore.gfxRenderer.renderer.bg0Renderer                  , "BGScreenBaseBlock"      , this.renderer.bg0Renderer.BGScreenBaseBlock                        );
    this.assign(IOCore.gfxRenderer.renderer.bg0Renderer                  , "BGXCoord"               , this.renderer.bg0Renderer.BGXCoord                                 );
    this.assign(IOCore.gfxRenderer.renderer.bg0Renderer                  , "BGYCoord"               , this.renderer.bg0Renderer.BGYCoord                                 );
    this.assign(IOCore.gfxRenderer.renderer.bg0Renderer                  , "do256"                  , this.renderer.bg0Renderer.do256                                    );
    this.assign(IOCore.gfxRenderer.renderer.bg0Renderer                  , "doMosaic"               , this.renderer.bg0Renderer.doMosaic                                 );
    this.assign(IOCore.gfxRenderer.renderer.bg0Renderer                  , "offset"                 , this.renderer.bg0Renderer.offset                                   );
    this.assign(IOCore.gfxRenderer.renderer.bg0Renderer                  , "priorityFlag"           , this.renderer.bg0Renderer.priorityFlag                             );
    this.assign(IOCore.gfxRenderer.renderer.bg0Renderer                  , "tileFetched"            , this.renderer.bg0Renderer.tileFetched                              );
    this.assign(IOCore.gfxRenderer.renderer.bg0Renderer                  , "tileMode"               , this.renderer.bg0Renderer.tileMode                                 );

    this.assign(IOCore.gfxRenderer.renderer.bg1Renderer                  , "BGCharacterBaseBlock"   , this.renderer.bg1Renderer.BGCharacterBaseBlock                     );
    this.assign(IOCore.gfxRenderer.renderer.bg1Renderer                  , "BGLayer"                , this.renderer.bg1Renderer.BGLayer                                  );
    this.assign(IOCore.gfxRenderer.renderer.bg1Renderer                  , "BGScreenBaseBlock"      , this.renderer.bg1Renderer.BGScreenBaseBlock                        );
    this.assign(IOCore.gfxRenderer.renderer.bg1Renderer                  , "BGXCoord"               , this.renderer.bg1Renderer.BGXCoord                                 );
    this.assign(IOCore.gfxRenderer.renderer.bg1Renderer                  , "BGYCoord"               , this.renderer.bg1Renderer.BGYCoord                                 );
    this.assign(IOCore.gfxRenderer.renderer.bg1Renderer                  , "do256"                  , this.renderer.bg1Renderer.do256                                    );
    this.assign(IOCore.gfxRenderer.renderer.bg1Renderer                  , "doMosaic"               , this.renderer.bg1Renderer.doMosaic                                 );
    this.assign(IOCore.gfxRenderer.renderer.bg1Renderer                  , "offset"                 , this.renderer.bg1Renderer.offset                                   );
    this.assign(IOCore.gfxRenderer.renderer.bg1Renderer                  , "priorityFlag"           , this.renderer.bg1Renderer.priorityFlag                             );
    this.assign(IOCore.gfxRenderer.renderer.bg1Renderer                  , "tileFetched"            , this.renderer.bg1Renderer.tileFetched                              );
    this.assign(IOCore.gfxRenderer.renderer.bg1Renderer                  , "tileMode"               , this.renderer.bg1Renderer.tileMode                                 );

    this.assign(IOCore.gfxRenderer.renderer.bg2TextRenderer              , "BGCharacterBaseBlock"   , this.renderer.bg2TextRenderer.BGCharacterBaseBlock                 );
    this.assign(IOCore.gfxRenderer.renderer.bg2TextRenderer              , "BGLayer"                , this.renderer.bg2TextRenderer.BGLayer                              );
    this.assign(IOCore.gfxRenderer.renderer.bg2TextRenderer              , "BGScreenBaseBlock"      , this.renderer.bg2TextRenderer.BGScreenBaseBlock                    );
    this.assign(IOCore.gfxRenderer.renderer.bg2TextRenderer              , "BGXCoord"               , this.renderer.bg2TextRenderer.BGXCoord                             );
    this.assign(IOCore.gfxRenderer.renderer.bg2TextRenderer              , "BGYCoord"               , this.renderer.bg2TextRenderer.BGYCoord                             );
    this.assign(IOCore.gfxRenderer.renderer.bg2TextRenderer              , "do256"                  , this.renderer.bg2TextRenderer.do256                                );
    this.assign(IOCore.gfxRenderer.renderer.bg2TextRenderer              , "doMosaic"               , this.renderer.bg2TextRenderer.doMosaic                             );
    this.assign(IOCore.gfxRenderer.renderer.bg2TextRenderer              , "offset"                 , this.renderer.bg2TextRenderer.offset                               );
    this.assign(IOCore.gfxRenderer.renderer.bg2TextRenderer              , "priorityFlag"           , this.renderer.bg2TextRenderer.priorityFlag                         );
    this.assign(IOCore.gfxRenderer.renderer.bg2TextRenderer              , "tileFetched"            , this.renderer.bg2TextRenderer.tileFetched                          );
    this.assign(IOCore.gfxRenderer.renderer.bg2TextRenderer              , "tileMode"               , this.renderer.bg2TextRenderer.tileMode                             ); 

    this.assign(IOCore.gfxRenderer.renderer.bg3TextRenderer              , "BGCharacterBaseBlock"   , this.renderer.bg3TextRenderer.BGCharacterBaseBlock                 );
    this.assign(IOCore.gfxRenderer.renderer.bg3TextRenderer              , "BGLayer"                , this.renderer.bg3TextRenderer.BGLayer                              );
    this.assign(IOCore.gfxRenderer.renderer.bg3TextRenderer              , "BGScreenBaseBlock"      , this.renderer.bg3TextRenderer.BGScreenBaseBlock                    );
    this.assign(IOCore.gfxRenderer.renderer.bg3TextRenderer              , "BGXCoord"               , this.renderer.bg3TextRenderer.BGXCoord                             );
    this.assign(IOCore.gfxRenderer.renderer.bg3TextRenderer              , "BGYCoord"               , this.renderer.bg3TextRenderer.BGYCoord                             );
    this.assign(IOCore.gfxRenderer.renderer.bg3TextRenderer              , "do256"                  , this.renderer.bg3TextRenderer.do256                                );
    this.assign(IOCore.gfxRenderer.renderer.bg3TextRenderer              , "doMosaic"               , this.renderer.bg3TextRenderer.doMosaic                             );
    this.assign(IOCore.gfxRenderer.renderer.bg3TextRenderer              , "offset"                 , this.renderer.bg3TextRenderer.offset                               );
    this.assign(IOCore.gfxRenderer.renderer.bg3TextRenderer              , "priorityFlag"           , this.renderer.bg3TextRenderer.priorityFlag                         );
    this.assign(IOCore.gfxRenderer.renderer.bg3TextRenderer              , "tileFetched"            , this.renderer.bg3TextRenderer.tileFetched                          );
    this.assign(IOCore.gfxRenderer.renderer.bg3TextRenderer              , "tileMode"               , this.renderer.bg3TextRenderer.tileMode                             ); 

    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGLayer"                , this.renderer.bgAffineRenderer0.BGLayer                            );       
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGReferenceX"           , this.renderer.bgAffineRenderer0.BGReferenceX                       );            
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGReferenceY"           , this.renderer.bgAffineRenderer0.BGReferenceY                       );            
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGdmx"                  , this.renderer.bgAffineRenderer0.BGdmx                              );     
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGdmy"                  , this.renderer.bgAffineRenderer0.BGdmy                              );     
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGdx"                   , this.renderer.bgAffineRenderer0.BGdx                               );    
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGdy"                   , this.renderer.bgAffineRenderer0.BGdy                               );    
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "doMosaic"               , this.renderer.bgAffineRenderer0.doMosaic                           );        
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "offset"                 , this.renderer.bgAffineRenderer0.offset                             );      
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "pb"                     , this.renderer.bgAffineRenderer0.pb                                 );  
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "pd"                     , this.renderer.bgAffineRenderer0.pd                                 );  
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "priorityFlag"           , this.renderer.bgAffineRenderer0.priorityFlag                       ); 

    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGLayer"                , this.renderer.bgAffineRenderer1.BGLayer                            );       
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGReferenceX"           , this.renderer.bgAffineRenderer1.BGReferenceX                       );            
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGReferenceY"           , this.renderer.bgAffineRenderer1.BGReferenceY                       );            
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGdmx"                  , this.renderer.bgAffineRenderer1.BGdmx                              );     
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGdmy"                  , this.renderer.bgAffineRenderer1.BGdmy                              );     
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGdx"                   , this.renderer.bgAffineRenderer1.BGdx                               );    
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGdy"                   , this.renderer.bgAffineRenderer1.BGdy                               );    
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "doMosaic"               , this.renderer.bgAffineRenderer1.doMosaic                           );        
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "offset"                 , this.renderer.bgAffineRenderer1.offset                             );      
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "pb"                     , this.renderer.bgAffineRenderer1.pb                                 );  
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "pd"                     , this.renderer.bgAffineRenderer1.pd                                 );  
    this.assign(IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "priorityFlag"           , this.renderer.bgAffineRenderer1.priorityFlag                       );   
 
    this.assign(IOCore.gfxRenderer.renderer.bg2FrameBufferRenderer       , "frameSelect"            , this.renderer.bg2FrameBufferRenderer.frameSelect                   );

    this.assign(IOCore.gfxRenderer.renderer.bg2MatrixRenderer            , "BGCharacterBaseBlock"   , this.renderer.bg2MatrixRenderer.BGCharacterBaseBlock               );                
    this.assign(IOCore.gfxRenderer.renderer.bg2MatrixRenderer            , "BGDisplayOverflow"      , this.renderer.bg2MatrixRenderer.BGDisplayOverflow                  );             
    this.assign(IOCore.gfxRenderer.renderer.bg2MatrixRenderer            , "BGScreenBaseBlock"      , this.renderer.bg2MatrixRenderer.BGScreenBaseBlock                  );             
    this.assign(IOCore.gfxRenderer.renderer.bg2MatrixRenderer            , "mapSize"                , this.renderer.bg2MatrixRenderer.mapSize                            );   
    this.assign(IOCore.gfxRenderer.renderer.bg2MatrixRenderer            , "mapSizeComparer"        , this.renderer.bg2MatrixRenderer.mapSizeComparer                    );              

    this.assign(IOCore.gfxRenderer.renderer.bg3MatrixRenderer            ,"BGCharacterBaseBlock"    , this.renderer.bg3MatrixRenderer.BGCharacterBaseBlock               );                
    this.assign(IOCore.gfxRenderer.renderer.bg3MatrixRenderer            ,"BGDisplayOverflow"       , this.renderer.bg3MatrixRenderer.BGDisplayOverflow                  );             
    this.assign(IOCore.gfxRenderer.renderer.bg3MatrixRenderer            ,"BGScreenBaseBlock"       , this.renderer.bg3MatrixRenderer.BGScreenBaseBlock                  );             
    this.assign(IOCore.gfxRenderer.renderer.bg3MatrixRenderer            ,"mapSize"                 , this.renderer.bg3MatrixRenderer.mapSize                            );   
    this.assign(IOCore.gfxRenderer.renderer.bg3MatrixRenderer            ,"mapSizeComparer"         , this.renderer.bg3MatrixRenderer.mapSizeComparer                    );   

    this.assign(IOCore.gfxRenderer.renderer.colorEffectsRenderer         ,"alphaBlendAmountTarget1" , this.renderer.colorEffectsRenderer.alphaBlendAmountTarget1         );
    this.assign(IOCore.gfxRenderer.renderer.colorEffectsRenderer         ,"alphaBlendAmountTarget2" , this.renderer.colorEffectsRenderer.alphaBlendAmountTarget2         );
    this.assign(IOCore.gfxRenderer.renderer.colorEffectsRenderer         ,"brightnessEffectAmount"  , this.renderer.colorEffectsRenderer.brightnessEffectAmount          );
    this.assign(IOCore.gfxRenderer.renderer.colorEffectsRenderer         ,"colorEffectsType"        , this.renderer.colorEffectsRenderer.colorEffectsType                );
    this.assign(IOCore.gfxRenderer.renderer.colorEffectsRenderer         ,"effectsTarget1"          , this.renderer.colorEffectsRenderer.effectsTarget1                  );
    this.assign(IOCore.gfxRenderer.renderer.colorEffectsRenderer         ,"effectsTarget2"          , this.renderer.colorEffectsRenderer.effectsTarget2                  );

    this.assign(IOCore.gfxRenderer.renderer.mosaicRenderer               ,"BGMosaicHSize"           , this.renderer.mosaicRenderer.BGMosaicHSize                         );
    this.assign(IOCore.gfxRenderer.renderer.mosaicRenderer               ,"BGMosaicVSize"           , this.renderer.mosaicRenderer.BGMosaicVSize                         );
    this.assign(IOCore.gfxRenderer.renderer.mosaicRenderer               ,"OBJMosaicHSize"          , this.renderer.mosaicRenderer.OBJMosaicHSize                        );
    this.assign(IOCore.gfxRenderer.renderer.mosaicRenderer               ,"OBJMosaicVSize"          , this.renderer.mosaicRenderer.OBJMosaicVSize                        );

    this.assign(IOCore.gfxRenderer.renderer.objRenderer                  ,"cyclesToRender"          , this.renderer.objRenderer.cyclesToRender                           );
    this.assign(IOCore.gfxRenderer.renderer.objRenderer                  ,"OAMRAM"                  , this.renderer.objRenderer.OAMRAM                                   );
    this.assign(IOCore.gfxRenderer.renderer.objRenderer                  ,"scratchBuffer"           , this.renderer.objRenderer.scratchBuffer                            );
    this.assign(IOCore.gfxRenderer.renderer.objRenderer                  ,"scratchWindowBuffer"     , this.renderer.objRenderer.scratchWindowBuffer                      );
    this.assign(IOCore.gfxRenderer.renderer.objRenderer                  ,"scratchOBJBuffer"        , this.renderer.objRenderer.scratchOBJBuffer                         );
    this.assign(IOCore.gfxRenderer.renderer.objRenderer                  ,"OBJMatrixParameters"     , this.renderer.objRenderer.OBJMatrixParameters                      );

    this.assign(IOCore.gfxRenderer.renderer.objWindowRenderer            ,"WINOBJOutside"           , this.renderer.objWindowRenderer.WINOBJOutside                      );

    this.assign(IOCore.gfxRenderer.renderer.window0Renderer              , "WINXCoordLeft"          , this.renderer.window0Renderer.WINXCoordLeft                        );
    this.assign(IOCore.gfxRenderer.renderer.window0Renderer              , "WINXCoordRight"         , this.renderer.window0Renderer.WINXCoordRight                       );
    this.assign(IOCore.gfxRenderer.renderer.window0Renderer              , "WINYCoordBottom"        , this.renderer.window0Renderer.WINYCoordBottom                      );
    this.assign(IOCore.gfxRenderer.renderer.window0Renderer              , "WINYCoordTop"           , this.renderer.window0Renderer.WINYCoordTop                         );
    this.assign(IOCore.gfxRenderer.renderer.window0Renderer              , "windowDisplayControl"   , this.renderer.window0Renderer.windowDisplayControl                 );

    this.assign(IOCore.gfxRenderer.renderer.window1Renderer              , "WINXCoordLeft"          , this.renderer.window1Renderer.WINXCoordLeft       );
    this.assign(IOCore.gfxRenderer.renderer.window1Renderer              , "WINXCoordRight"         , this.renderer.window1Renderer.WINXCoordRight      );
    this.assign(IOCore.gfxRenderer.renderer.window1Renderer              , "WINYCoordBottom"        , this.renderer.window1Renderer.WINYCoordBottom     );
    this.assign(IOCore.gfxRenderer.renderer.window1Renderer              , "WINYCoordTop"           , this.renderer.window1Renderer.WINYCoordTop        );
    this.assign(IOCore.gfxRenderer.renderer.window1Renderer              , "windowDisplayControl"   , this.renderer.window1Renderer.windowDisplayControl);

   /* Audio */
   this.assign(IOCore.sound         , "AGBDirectSoundA"                 , this.AGBDirectSoundA                     );
   this.assign(IOCore.sound         , "AGBDirectSoundAFolded"           , this.AGBDirectSoundAFolded               );
   this.assign(IOCore.sound         , "AGBDirectSoundALeftCanPlay"      , this.AGBDirectSoundALeftCanPlay          );
   this.assign(IOCore.sound         , "AGBDirectSoundARightCanPlay"     , this.AGBDirectSoundARightCanPlay         );
   this.assign(IOCore.sound         , "AGBDirectSoundAShifter"          , this.AGBDirectSoundAShifter              );
   this.assign(IOCore.sound         , "AGBDirectSoundATimer"            , this.AGBDirectSoundATimer                );
   this.assign(IOCore.sound         , "AGBDirectSoundB"                 , this.AGBDirectSoundB                     );
   this.assign(IOCore.sound         , "AGBDirectSoundBFolded"           , this.AGBDirectSoundBFolded               );
   this.assign(IOCore.sound         , "AGBDirectSoundBLeftCanPlay"      , this.AGBDirectSoundBLeftCanPlay          );
   this.assign(IOCore.sound         , "AGBDirectSoundBRightCanPlay"     , this.AGBDirectSoundBRightCanPlay         );
   this.assign(IOCore.sound         , "AGBDirectSoundBShifter"          , this.AGBDirectSoundBShifter              );
   this.assign(IOCore.sound         , "AGBDirectSoundBTimer"            , this.AGBDirectSoundBTimer                );
   this.assign(IOCore.sound         , "CGBMixerOutputCacheLeft"         , this.CGBMixerOutputCacheLeft             );
   this.assign(IOCore.sound         , "CGBMixerOutputCacheLeftFolded"   , this.CGBMixerOutputCacheLeftFolded       );
   this.assign(IOCore.sound         , "CGBMixerOutputCacheRight"        , this.CGBMixerOutputCacheRight            );
   this.assign(IOCore.sound         , "CGBMixerOutputCacheRightFolded"  , this.CGBMixerOutputCacheRightFolded      );
   this.assign(IOCore.sound         , "CGBOutputRatio"                  , this.CGBOutputRatio                      );
   this.assign(IOCore.sound         , "PWMBitDepthMask"                 , this.PWMBitDepthMask                     );
   this.assign(IOCore.sound         , "PWMBitDepthMaskShadow"           , this.PWMBitDepthMaskShadow               );
   this.assign(IOCore.sound         , "PWMWidth"                        , this.PWMWidth                            );
   this.assign(IOCore.sound         , "PWMWidthOld"                     , this.PWMWidthOld                         );
   this.assign(IOCore.sound         , "PWMWidthShadow"                  , this.PWMWidthShadow                      );
   this.assign(IOCore.sound         , "VinLeftChannelMasterVolume"      , this.VinLeftChannelMasterVolume          );
   this.assign(IOCore.sound         , "VinRightChannelMasterVolume"     , this.VinRightChannelMasterVolume         );
   this.assign(IOCore.sound         , "audioClocksUntilNextEvent"       , this.audioClocksUntilNextEvent           );
   this.assign(IOCore.sound         , "audioClocksUntilNextEventCounter", this.audioClocksUntilNextEventCounter    );
   this.assign(IOCore.sound         , "audioIndex"                      , this.audioIndex                          );
   this.assign(IOCore.sound         , "audioResamplerFirstPassFactor"   , this.audioResamplerFirstPassFactor       );
   this.assign(IOCore.sound         , "audioTicks"                      , this.audioTicks                          );
   this.assign(IOCore.sound         , "downsampleInputLeft"             , this.downsampleInputLeft                 );
   this.assign(IOCore.sound         , "downsampleInputRight"            , this.downsampleInputRight                );
   this.assign(IOCore.sound         , "mixerOutputCacheLeft"            , this.mixerOutputCacheLeft                );
   this.assign(IOCore.sound         , "mixerOutputCacheRight"           , this.mixerOutputCacheRight               );
   this.assign(IOCore.sound         , "mixerSoundBIAS"                  , this.mixerSoundBIAS                      );
   this.assign(IOCore.sound         , "nr50"                            , this.nr50                                );
   this.assign(IOCore.sound         , "nr51"                            , this.nr51                                );
   this.assign(IOCore.sound         , "nr52"                            , this.nr52                                );
   this.assign(IOCore.sound         , "nr60"                            , this.nr60                                );
   this.assign(IOCore.sound         , "nr61"                            , this.nr61                                );
   this.assign(IOCore.sound         , "nr62"                            , this.nr62                                );
   this.assign(IOCore.sound         , "nr63"                            , this.nr63                                );
   this.assign(IOCore.sound         , "sequencePosition"                , this.sequencePosition                    );
   this.assign(IOCore.sound         , "sequencerClocks"                 , this.sequencerClocks                     );
   this.assign(IOCore.sound         , "soundMasterEnabled"              , this.soundMasterEnabled                  );
   
   this.assign(IOCore.sound.channel1, "CachedDuty"                      , this.channel1.CachedDuty                 );      
   this.assign(IOCore.sound.channel1, "DutyTracker"                     , this.channel1.DutyTracker                );      
   this.assign(IOCore.sound.channel1, "Enabled"                         , this.channel1.Enabled                    );      
   this.assign(IOCore.sound.channel1, "FrequencyCounter"                , this.channel1.FrequencyCounter           );      
   this.assign(IOCore.sound.channel1, "FrequencyTracker"                , this.channel1.FrequencyTracker           );      
   this.assign(IOCore.sound.channel1, "ShadowFrequency"                 , this.channel1.ShadowFrequency            );      
   this.assign(IOCore.sound.channel1, "SweepFault"                      , this.channel1.SweepFault                 );      
   this.assign(IOCore.sound.channel1, "Swept"                           , this.channel1.Swept                      );      
   this.assign(IOCore.sound.channel1, "canPlay"                         , this.channel1.canPlay                    );      
   this.assign(IOCore.sound.channel1, "consecutive"                     , this.channel1.consecutive                );      
   this.assign(IOCore.sound.channel1, "currentSampleLeft"               , this.channel1.currentSampleLeft          );      
   this.assign(IOCore.sound.channel1, "currentSampleRight"              , this.channel1.currentSampleRight         );      
   this.assign(IOCore.sound.channel1, "decreaseSweep"                   , this.channel1.decreaseSweep              );      
   this.assign(IOCore.sound.channel1, "envelopeSweeps"                  , this.channel1.envelopeSweeps             );      
   this.assign(IOCore.sound.channel1, "envelopeSweepsLast"              , this.channel1.envelopeSweepsLast         );      
   this.assign(IOCore.sound.channel1, "envelopeType"                    , this.channel1.envelopeType               );      
   this.assign(IOCore.sound.channel1, "envelopeVolume"                  , this.channel1.envelopeVolume             );      
   this.assign(IOCore.sound.channel1, "frequency"                       , this.channel1.frequency                  );      
   this.assign(IOCore.sound.channel1, "frequencySweepDivider"           , this.channel1.frequencySweepDivider      );      
   this.assign(IOCore.sound.channel1, "lastTimeSweep"                   , this.channel1.lastTimeSweep              );      
   this.assign(IOCore.sound.channel1, "leftEnable"                      , this.channel1.leftEnable                 );      
   this.assign(IOCore.sound.channel1, "nr10"                            , this.channel1.nr10                       );      
   this.assign(IOCore.sound.channel1, "nr11"                            , this.channel1.nr11                       );      
   this.assign(IOCore.sound.channel1, "nr12"                            , this.channel1.nr12                       );      
   this.assign(IOCore.sound.channel1, "nr14"                            , this.channel1.nr14                       );      
   this.assign(IOCore.sound.channel1, "rightEnable"                     , this.channel1.rightEnable                );      
   this.assign(IOCore.sound.channel1, "timeSweep"                       , this.channel1.timeSweep                  );      
   this.assign(IOCore.sound.channel1, "totalLength"                     , this.channel1.totalLength                );      
   
   this.assign(IOCore.sound.channel2, "CachedDuty"                      , this.channel2.CachedDuty                 );
   this.assign(IOCore.sound.channel2, "DutyTracker"                     , this.channel2.DutyTracker                );
   this.assign(IOCore.sound.channel2, "Enabled"                         , this.channel2.Enabled                    );
   this.assign(IOCore.sound.channel2, "FrequencyCounter"                , this.channel2.FrequencyCounter           );
   this.assign(IOCore.sound.channel2, "FrequencyTracker"                , this.channel2.FrequencyTracker           );
   this.assign(IOCore.sound.channel2, "ShadowFrequency"                 , this.channel2.ShadowFrequency            );
   this.assign(IOCore.sound.channel2, "canPlay"                         , this.channel2.canPlay                    );
   this.assign(IOCore.sound.channel2, "consecutive"                     , this.channel2.consecutive                );
   this.assign(IOCore.sound.channel2, "currentSampleLeft"               , this.channel2.currentSampleLeft          );
   this.assign(IOCore.sound.channel2, "currentSampleRight"              , this.channel2.currentSampleRight         );
   this.assign(IOCore.sound.channel2, "envelopeSweeps"                  , this.channel2.envelopeSweeps             );
   this.assign(IOCore.sound.channel2, "envelopeSweepsLast"              , this.channel2.envelopeSweepsLast         );
   this.assign(IOCore.sound.channel2, "envelopeType"                    , this.channel2.envelopeType               );
   this.assign(IOCore.sound.channel2, "envelopeVolume"                  , this.channel2.envelopeVolume             );
   this.assign(IOCore.sound.channel2, "frequency"                       , this.channel2.frequency                  );
   this.assign(IOCore.sound.channel2, "leftEnable"                      , this.channel2.leftEnable                 );
   this.assign(IOCore.sound.channel2, "nr21"                            , this.channel2.nr21                       );
   this.assign(IOCore.sound.channel2, "nr22"                            , this.channel2.nr22                       );
   this.assign(IOCore.sound.channel2, "nr23"                            , this.channel2.nr23                       );
   this.assign(IOCore.sound.channel2, "nr24"                            , this.channel2.nr24                       );
   this.assign(IOCore.sound.channel2, "rightEnable"                     , this.channel2.rightEnable                );
   this.assign(IOCore.sound.channel2, "totalLength"                     , this.channel2.totalLength                );
   
   this.assign(IOCore.sound.channel3, "Enabled"                         , this.channel3.Enabled                    );         
   this.assign(IOCore.sound.channel3, "FrequencyPeriod"                 , this.channel3.FrequencyPeriod            );                 
   this.assign(IOCore.sound.channel3, "PCM"                             , this.channel3.PCM                        );     
   this.assign(IOCore.sound.channel3, "WAVERAM8"                        , this.channel3.WAVERAM8                   );          
   this.assign(IOCore.sound.channel3, "WAVERAMBankAccessed"             , this.channel3.WAVERAMBankAccessed        );                     
   this.assign(IOCore.sound.channel3, "WAVERAMBankSpecified"            , this.channel3.WAVERAMBankSpecified       );                      
   this.assign(IOCore.sound.channel3, "WaveRAMBankSize"                 , this.channel3.WaveRAMBankSize            );                 
   this.assign(IOCore.sound.channel3, "cachedSample"                    , this.channel3.cachedSample               );              
   this.assign(IOCore.sound.channel3, "canPlay"                         , this.channel3.canPlay                    );         
   this.assign(IOCore.sound.channel3, "consecutive"                     , this.channel3.consecutive                );             
   this.assign(IOCore.sound.channel3, "counter"                         , this.channel3.counter                    );         
   this.assign(IOCore.sound.channel3, "currentSampleLeft"               , this.channel3.currentSampleLeft          );                   
   this.assign(IOCore.sound.channel3, "currentSampleRight"              , this.channel3.currentSampleRight         );                    
   this.assign(IOCore.sound.channel3, "frequency"                       , this.channel3.frequency                  );           
   this.assign(IOCore.sound.channel3, "lastSampleLookup"                , this.channel3.lastSampleLookup           );                  
   this.assign(IOCore.sound.channel3, "leftEnable"                      , this.channel3.leftEnable                 );            
   this.assign(IOCore.sound.channel3, "nr30"                            , this.channel3.nr30                       );      
   this.assign(IOCore.sound.channel3, "nr31"                            , this.channel3.nr31                       );      
   this.assign(IOCore.sound.channel3, "nr32"                            , this.channel3.nr32                       );      
   this.assign(IOCore.sound.channel3, "nr33"                            , this.channel3.nr33                       );      
   this.assign(IOCore.sound.channel3, "nr34"                            , this.channel3.nr34                       );      
   this.assign(IOCore.sound.channel3, "patternType"                     , this.channel3.patternType                );             
   this.assign(IOCore.sound.channel3, "rightEnable"                     , this.channel3.rightEnable                );                
   this.assign(IOCore.sound.channel3, "totalLength"                     , this.channel3.totalLength                );          
   
   this.assign(IOCore.sound.channel4, "BitRange"                        , this.channel4.BitRange                   );
   this.assign(IOCore.sound.channel4, "Enabled"                         , this.channel4.Enabled                    );
   this.assign(IOCore.sound.channel4, "FrequencyPeriod"                 , this.channel4.FrequencyPeriod            );
   this.assign(IOCore.sound.channel4, "VolumeShifter"                   , this.channel4.VolumeShifter              );
   this.assign(IOCore.sound.channel4, "cachedSample"                    , this.channel4.cachedSample               );
   this.assign(IOCore.sound.channel4, "canPlay"                         , this.channel4.canPlay                    );
   this.assign(IOCore.sound.channel4, "consecutive"                     , this.channel4.consecutive                );
   this.assign(IOCore.sound.channel4, "counter"                         , this.channel4.counter                    );
   this.assign(IOCore.sound.channel4, "currentSampleLeft"               , this.channel4.currentSampleLeft          );
   this.assign(IOCore.sound.channel4, "currentSampleRight"              , this.channel4.currentSampleRight         );
   this.assign(IOCore.sound.channel4, "currentVolume"                   , this.channel4.currentVolume              );
   this.assign(IOCore.sound.channel4, "envelopeSweeps"                  , this.channel4.envelopeSweeps             );
   this.assign(IOCore.sound.channel4, "envelopeSweepsLast"              , this.channel4.envelopeSweepsLast         );
   this.assign(IOCore.sound.channel4, "envelopeType"                    , this.channel4.envelopeType               );
   this.assign(IOCore.sound.channel4, "envelopeVolume"                  , this.channel4.envelopeVolume             );
   this.assign(IOCore.sound.channel4, "lastSampleLookup"                , this.channel4.lastSampleLookup           );
   this.assign(IOCore.sound.channel4, "leftEnable"                      , this.channel4.leftEnable                 );
   this.assign(IOCore.sound.channel4, "noiseSampleTable"                , this.channel4.noiseSampleTable           );
   this.assign(IOCore.sound.channel4, "nr42"                            , this.channel4.nr42                       );
   this.assign(IOCore.sound.channel4, "nr43"                            , this.channel4.nr43                       );
   this.assign(IOCore.sound.channel4, "nr44"                            , this.channel4.nr44                       );
   this.assign(IOCore.sound.channel4, "rightEnable"                     , this.channel4.rightEnable                );
   this.assign(IOCore.sound.channel4, "totalLength"                     , this.channel4.totalLength                );
   
   this.assign(IOCore.sound.FIFOABuffer, "buffer"                       , this.FIFOA.buffer                        );   
   this.assign(IOCore.sound.FIFOABuffer, "count"                        , this.FIFOA.count                         );   
   this.assign(IOCore.sound.FIFOABuffer, "position"                     , this.FIFOA.position                      ); 
   
   this.assign(IOCore.sound.FIFOBBuffer, "buffer"                       , this.FIFOB.buffer                        );   
   this.assign(IOCore.sound.FIFOBBuffer, "count"                        , this.FIFOB.count                         );   
   this.assign(IOCore.sound.FIFOBBuffer, "position"                     , this.FIFOB.position                      );    

   /* Serial */
   this.assign(IOCore.serial, "JOYBUS_CNTL_FLAGS"        , this.JOYBUS_CNTL_FLAGS        );
   this.assign(IOCore.serial, "JOYBUS_IRQ"               , this.JOYBUS_IRQ               );
   this.assign(IOCore.serial, "JOYBUS_RECV0"             , this.JOYBUS_RECV0             );
   this.assign(IOCore.serial, "JOYBUS_RECV1"             , this.JOYBUS_RECV1             );
   this.assign(IOCore.serial, "JOYBUS_RECV2"             , this.JOYBUS_RECV2             );
   this.assign(IOCore.serial, "JOYBUS_RECV3"             , this.JOYBUS_RECV3             );
   this.assign(IOCore.serial, "JOYBUS_SEND0"             , this.JOYBUS_SEND0             );
   this.assign(IOCore.serial, "JOYBUS_SEND1"             , this.JOYBUS_SEND1             );
   this.assign(IOCore.serial, "JOYBUS_SEND2"             , this.JOYBUS_SEND2             );
   this.assign(IOCore.serial, "JOYBUS_SEND3"             , this.JOYBUS_SEND3             );
   this.assign(IOCore.serial, "JOYBUS_STAT"              , this.JOYBUS_STAT              );
   this.assign(IOCore.serial, "RCNTDataBitFlow"          , this.RCNTDataBitFlow          );
   this.assign(IOCore.serial, "RCNTDataBits"             , this.RCNTDataBits             );
   this.assign(IOCore.serial, "RCNTIRQ"                  , this.RCNTIRQ                  );
   this.assign(IOCore.serial, "RCNTMode"                 , this.RCNTMode                 );
   this.assign(IOCore.serial, "SIOBaudRate"              , this.SIOBaudRate              );
   this.assign(IOCore.serial, "SIOCNT0_DATA"             , this.SIOCNT0_DATA             );
   this.assign(IOCore.serial, "SIOCNT_IRQ"               , this.SIOCNT_IRQ               );
   this.assign(IOCore.serial, "SIOCNT_MODE"              , this.SIOCNT_MODE              );
   this.assign(IOCore.serial, "SIOCNT_UART_CTS"          , this.SIOCNT_UART_CTS          );
   this.assign(IOCore.serial, "SIOCNT_UART_FIFO"         , this.SIOCNT_UART_FIFO         );
   this.assign(IOCore.serial, "SIOCNT_UART_FIFO_ENABLE"  , this.SIOCNT_UART_FIFO_ENABLE  );
   this.assign(IOCore.serial, "SIOCNT_UART_MISC"         , this.SIOCNT_UART_MISC         );
   this.assign(IOCore.serial, "SIOCNT_UART_PARITY_ENABLE", this.SIOCNT_UART_PARITY_ENABLE);
   this.assign(IOCore.serial, "SIOCNT_UART_RECV_ENABLE"  , this.SIOCNT_UART_RECV_ENABLE  );
   this.assign(IOCore.serial, "SIOCNT_UART_SEND_ENABLE"  , this.SIOCNT_UART_SEND_ENABLE  );
   this.assign(IOCore.serial, "SIOCOMMERROR"             , this.SIOCOMMERROR             );
   this.assign(IOCore.serial, "SIODATA8"                 , this.SIODATA8                 );
   this.assign(IOCore.serial, "SIODATA_A"                , this.SIODATA_A                );
   this.assign(IOCore.serial, "SIODATA_B"                , this.SIODATA_B                );
   this.assign(IOCore.serial, "SIODATA_C"                , this.SIODATA_C                );
   this.assign(IOCore.serial, "SIODATA_D"                , this.SIODATA_D                );
   this.assign(IOCore.serial, "SIOMULT_PLAYER_NUMBER"    , this.SIOMULT_PLAYER_NUMBER    );
   this.assign(IOCore.serial, "SIOShiftClockDivider"     , this.SIOShiftClockDivider     );
   this.assign(IOCore.serial, "SIOShiftClockExternal"    , this.SIOShiftClockExternal    );
   this.assign(IOCore.serial, "SIOTransferStarted"       , this.SIOTransferStarted       );
   this.assign(IOCore.serial, "serialBitsShifted"        , this.serialBitsShifted        );
   this.assign(IOCore.serial, "shiftClocks"              , this.shiftClocks              );

   /* Save */
   this.assign(IOCore.saves    , "saveType"     ,this.saveType);
   // TODO: switch reference to saveType?

   this.assign(IOCore.saves.GPIOChip, "data"      , this.GPIOChip.data     );      
   this.assign(IOCore.saves.GPIOChip, "direction" , this.GPIOChip.direction);           
   this.assign(IOCore.saves.GPIOChip, "readWrite" , this.GPIOChip.readWrite);           
   this.assign(IOCore.saves.GPIOChip, "type"      , this.GPIOChip.type     );      

   this.assign(IOCore.saves.GPIOChip.rtc, "pins"           , this.GPIOChip.RTC.pins          );
   this.assign(IOCore.saves.GPIOChip.rtc, "direction"      , this.GPIOChip.RTC.direction     );
   this.assign(IOCore.saves.GPIOChip.rtc, "totalBytes"     , this.GPIOChip.RTC.totalBytes    );
   this.assign(IOCore.saves.GPIOChip.rtc, "bytesRemaining" , this.GPIOChip.RTC.bytesRemaining);
   this.assign(IOCore.saves.GPIOChip.rtc, "transferStep"   , this.GPIOChip.RTC.transferStep  );
   this.assign(IOCore.saves.GPIOChip.rtc, "reading"        , this.GPIOChip.RTC.reading       );
   this.assign(IOCore.saves.GPIOChip.rtc, "bitsRead"       , this.GPIOChip.RTC.bitsRead      );
   this.assign(IOCore.saves.GPIOChip.rtc, "bits"           , this.GPIOChip.RTC.bits          );
   this.assign(IOCore.saves.GPIOChip.rtc, "command"        , this.GPIOChip.RTC.command       );
   this.assign(IOCore.saves.GPIOChip.rtc, "control"        , this.GPIOChip.RTC.control       );
   this.assign(IOCore.saves.GPIOChip.rtc, "time"           , this.GPIOChip.RTC.time          );

   this.assign(IOCore.saves.UNDETERMINED, "saves"   , this.UNDETERMINED.saves   );
   this.assign(IOCore.saves.UNDETERMINED, "possible", this.UNDETERMINED.possible);

   this.assign(IOCore.saves.SRAMChip, "TILTChip"         , this.SRAMChip.TILTChip        );
   this.assign(IOCore.saves.SRAMChip, "TILTChipUnlocked" , this.SRAMChip.TILTChipUnlocked);
   this.assign(IOCore.saves.SRAMChip, "saves"            , this.SRAMChip.saves           );

   this.assign(IOCore.saves.FLASHChip, "BANKOffset"             , this.FLASHChip.BANKOffset             );    
   this.assign(IOCore.saves.FLASHChip, "flashCommand"           , this.FLASHChip.flashCommand           );    
   this.assign(IOCore.saves.FLASHChip, "flashCommandUnlockStage", this.FLASHChip.flashCommandUnlockStage);    
   this.assign(IOCore.saves.FLASHChip, "largestSizePossible"    , this.FLASHChip.largestSizePossible    );    
   this.assign(IOCore.saves.FLASHChip, "notATMEL"               , this.FLASHChip.notATMEL               );    
   this.assign(IOCore.saves.FLASHChip, "saves"                  , this.FLASHChip.saves                  );         
   this.assign(IOCore.saves.FLASHChip, "writeBytesLeft"         , this.FLASHChip.writeBytesLeft         );    

   this.assign(IOCore.saves.EEPROMChip, "address"             , this.EEPROMChip.address            );    
   this.assign(IOCore.saves.EEPROMChip, "bitsProcessed"       , this.EEPROMChip.bitsProcessed      );          
   this.assign(IOCore.saves.EEPROMChip, "buffer"              , this.EEPROMChip.buffer             );   
   this.assign(IOCore.saves.EEPROMChip, "largestSizePossible" , this.EEPROMChip.largestSizePossible);                
   this.assign(IOCore.saves.EEPROMChip, "mode"                , this.EEPROMChip.mode               ); 
   this.assign(IOCore.saves.EEPROMChip, "saves"               , this.EEPROMChip.saves              );  
}


